---
sidebar_position: 3
---

# AuthenticationTokenService

Information on the JWT based authentication approach of the core API.

### 1. Overview

> This document provides pragmatic information on the JWT based authentication approach of the project's API.
>
>
The Authentication approach combines the benefits of long-term but weak refresh tokens with short-term, more powerful
access tokens.

:::note
The API is still in a very early alpha version, so changes to the general approach and this document will happen.
:::

***

### 2. Refresh token

1. Claim a refresh token
    ```   
    AuthenticationTokenService::Refresh::Encoder.call(<user_id>,[<man_interval>])
    ```
   This creates a refresh token for a given user.
   ####
   ###### Data parameters
    1. ``<user_id>`` *<span style={{color:"#FFFFFF"}}>REQUIRED </span>*
        + Integer
        + The user ``id`` of the subject of the token (``sub`` claim)
        + A user to this ``id`` must exist
        + The user to this ``id`` must be verified (``activity_status`` == 1)
        + The user to this ``id`` must not be blocked (listed on ``UserBlacklist``)
    2. ``<man_interval>`` *<span style={{color:"#808080"}}>OPTIONAL </span>*
        + Integer
        + Validity time interval of the token in seconds after the issuing time of the token
        + (0.5 hours ==) 1800 < `man_interval` < 1209600 (== 336 hours == 2 weeks)
        + If ```<man_interval>``` is blank, or ```<man_interval>``` is too big/small, the token will expire after 4
          hours

   ####
   ###### Pipeline
   First, the inputs are checked for correct formatting. Then the token claims are populated:
    + ``sub`` - who owns the token?:``<user_id>``
    + ``iat`` - when was the token issued?: An exact timestamp in seconds after 1am of the 01 01 1970
    + ``exp`` - when does the token expire?: If ``<man_interval>`` is not given/blank => 4 hours from now;
      If ``<man_interval>`` is given: => (``<man_interval>`` divided by 3600) hours from now. If ``<man_interval>`` is
      in the required format, but ``<man_interval>`` is either smaller that 1800 or greater than 1209600, ``exp`` is
      either set to the 0.5 hours or the 336 hours/2 weeks - what ever is closer to ``<man_interval>``
    + ``jti`` - a unique identifier: A MD5 encoded, unique String
    + ``iss`` - who issued the token?: The name of the machine that issues this token
      The claims get wrapped in a hash (payload) and this hash is given to the JWT.encode method, which encodes the
      claims into a JWT token using the HS256 algorithm and a secret key.
   ####
   ###### Return
    ```   
    "<refresh_token>"
    ```
   ####
   ###### Exceptions
   ```
   CustomExceptions::InvalidInput
   ```
   You should only expect the following subclasses:
    + ``::SUB``: When ``<user_id>`` is malformed
    + ``::CustomEXP``: When ``<man_interval>`` is malformed
   ####    
   ```
   CustomExceptions::InvalidUser
   ```
   You should only expect the following subclasses:
    + ``::Unkown``: When there is no user for ``<user_id>``
    + ``::Inactive::NotVerified``: When the user for ``<user_id>`` is not verified (``activity_status`` == 0)
    + ``::Inactive::Blocked``: When the user for ``<user_id>`` has a record on ``UserBlacklist``
   ####

***

2. Decipher a refresh token
   ```   
    AuthenticationTokenService::Refresh::Decoder.call(<token>)
    ```
   This decodes a refresh token and returns its claims.
   ####
   ###### Data parameters
    1. ``<token>`` *<span style={{color:"#dc143c"}}>REQUIRED </span>*
        + String
        + ``<refresh_token>`` must be a JWT, solely issued by the ``AuthenticationTokenService::Refresh::Encoder`` class
        + ``<refresh_token>`` must not be blocked (listed on ``AuthBlacklist``)

   ####
   ###### Pipeline
   First, the inputs are checked for correct formatting. Then ``<refresh_token>`` gets decoded.
   Third, ``<refresh_token>`` and its claims get verified.
   ####
   ###### Return
    ```   
    [{<refresh_token_claims>}]
    ```
   ####
   ###### Exceptions
   Have a look at the [documentation for custom exceptions](../../core/custom_exceptions.md) for more information.

   ####    
     ```
   JWT
   ```
   You should only expect the following subclasses:
    + ``::ExpiredSignature``: When ``<refresh_token>`` has expired
    + ``::InvalidIssuerError``: When ``<refresh_token>`` was issued by an unknown issuer
    + ``::InvalidJtiError``: When ``<refresh_token>`` has a record on ``AuthBlacklist`` (the token is blocked)
    + ``::InvalidIatError``: When ``<refresh_token>`` was timestamped incorrectly
    + ``::InvalidSubError``: When the owner of ``<refresh_token>`` is unknown
    + ``::VerificationError``: When ``<refresh_token>`` was encoded with an unknown secret key and/or was tampered with
    + ``::IncorrectAlgorithm``: When ``<refresh_token>`` was encoded using a unknown/incompatible algorithm
   ####

***

### 3. Access token

1. Claim an access token
    ```   
    AuthenticationTokenService::Access::Encoder.call(<refresh_token>)
    ```
   This creates an access token if a given refresh token is valid.
   ####
   ###### Data parameters
    1. ``<refresh_token>`` *<span style={{color:"#dc143c"}}>REQUIRED </span>*
        + String
        + ``<refresh_token>`` must be a JWT, solely issued by the ``AuthenticationTokenService::Refresh::Encoder`` class
        + ``<refresh_token>`` must not be blocked (listed on ``AuthBlacklist``)

   ####
   ###### Pipeline
   First, the inputs are checked for correct formatting. Then ``<refresh_token>`` gets decoded.
   Third, ``<refresh_token>`` and its claims get verified. Finally an access token is generated based on the claims
   of ``<refresh_token>``:
    + ``sub`` - who owns the token?:``<user_id>``
    + ``exp`` - when does the token expire?: An access token is valid for 0.3333 hours (20 min)
    + ``typ`` - specifies the access rights of the token based on ``user_type``
    + ``iss`` - who issued the token?: The name of the machine that issues this token
   ####
   ###### Return
    ```   
    "<access_token>"
    ``` 
   ####
   ###### Exceptions
   ```
   CustomExceptions::InvalidInput
   ```
   You should only expect the following subclasses:
    + ``::Token``: When ``<refresh_token>`` is malformed
   ####    
     ```
   JWT
   ```
   You should only expect the following subclasses:
    + ``::ExpiredSignature``: When ``<refresh_token>`` has expired
    + ``::InvalidIssuerError``: When ``<refresh_token>`` was issued by an unknown issuer
    + ``::InvalidJtiError``: When ``<refresh_token>`` has a record on ``AuthBlacklist`` (the token is blocked)
    + ``::InvalidIatError``: When ``<refresh_token>`` was timestamped incorrectly
    + ``::InvalidSubError``: When the owner of ``<refresh_token>`` is unknown
    + ``::VerificationError``: When ``<refresh_token>`` was encoded with an unknown secret key and/or was tampered with
    + ``::IncorrectAlgorithm``: When ``<refresh_token>`` was encoded using a unknown/incompatible algorithm
    + ``::DecodeError``: When ``<refresh_token>`` was falsely segmented
   ####

***

2. Decipher an access token
    ```   
    AuthenticationTokenService::Access::Decoder.call(<access_token>)
    ```
   This decodes an access token and returns its claims.
   ####
   ###### Data parameters
    1. ``<access_token>`` *<span style={{color:"#dc143c"}}>REQUIRED </span>*
        + String
        + ``<access_token>`` must be a JWT, solely issued by the ``AuthenticationTokenService::Access::Encoder`` class

   ####
   ###### Pipeline
   First, the inputs are checked for correct formatting. Then ``<access_token>`` gets decoded.
   Neither ``<access_token>`` nor its claimed get further verified.
   ####
   ###### Return
    ```   
    [{<access_token_claims>}]
    ``` 
   ####
   ###### Exceptions
   ```
   CustomExceptions::InvalidInput
   ```
   You should only expect the following subclasses:
    + ``::Token``: When ``<access_token>`` is malformed
   ####    
   ```
   JWT
   ```
   You should only expect the following subclasses:
    + ``::ExpiredSignature``: When ``<access_token>`` has expired
    + ``::InvalidIssuerError``: When ``<access_token>`` was issued by an unknown issuer
    + ``::VerificationError``: When ``<access_token>`` was encoded with an unknown secret key and/or was tampered with
    + ``::IncorrectAlgorithm``: When ``<access_token>`` was encoded using a unknown/incompatible algorithm
    + ``::DecodeError``: When ``<access_token>`` was falsely segmented
   ####

***

### 4. Client token

1. Claim a client token
    ```   
    AuthenticationTokenService::Quicklink::Client::Encoder.call(<user_id>, <subscription>, <user_id>, <custom_exp>)
    ```
   This creates a client token for a given user_id.
   ####
   ###### Data parameters
    1. ``<user_id>`` *<span style={{color:"#dc143c"}}>REQUIRED </span>*
        + Integer
        + The user ``id`` of the subject of the token (``sub`` claim)
        + A user to this ``id`` must exist
        + The user to this ``id`` must be verified (``activity_status`` == 1)
        + The user to this ``id`` must not be blocked (listed on ``UserBlacklist``)
    2. ``<subscription>`` *<span style={{color:"#dc143c"}}>REQUIRED </span>*
        + Subscription
        + ``<subscription>`` must be a valid subscription
    3. ``<custom_exp>`` *<span style={{color:"#808080"}}>OPTIONAL </span>*
        + Date
        + ``<custom_exp>`` Describes a custom expiration date and must be in the future. If it exceeds the subscription's expiration date, the earlier of the two will be used instead.

   ####
   ###### Pipeline
   First, the inputs are checked for correct formatting. Then ``<access_token>`` gets decoded.
   Third, ``<access_token>`` and its claims get verified. Finally a client_token is generated based on the claims
   of ``<access_token>``:
    + ``sub`` - who owns the token?:``<user_id>``
    + ``exp`` - when does the token expire?: An access token is valid for 0.3333 hours (20 min)
    + ``typ`` - specifies the access rights of the token based on ``user_type``
    + ``iss`` - who issued the token?: The name of the machine that issues this token
   ####
   ###### Return
    ```   
    "<client_token>"
    ``` 
   ####
   ###### Exceptions
   ```
   CustomExceptions::InvalidInput
   ```
   You should only expect the following subclasses:
    + ``::Token``: When ``<access_token>`` is malformed
   ####    
   ```
   CustomExceptions::Subscription
   ```
   + ``::ExpiredOrMissing``: When the ``session[:subscription_type]`` is insufficient for the requested ``session[:mode]``
   ####    
   ```
   JWT
   ```
   You should only expect the following subclasses:
    + ``::ExpiredSignature``: When ``<client_token>`` has expired
    + ``::InvalidIssuerError``: When ``<client_token>`` was issued by an unknown issuer
    + ``::InvalidJtiError``: When ``<client_token>`` has a record on ``AuthBlacklist`` (the token is blocked)
    + ``::InvalidIatError``: When ``<client_token>`` was timestamped incorrectly
    + ``::InvalidSubError``: When the owner of ``<client_token>`` is unknown
    + ``::VerificationError``: When ``<client_token>`` was encoded with an unknown secret key and/or was tampered with
    + ``::IncorrectAlgorithm``: When ``<client_token>`` was encoded using a unknown/incompatible algorithm
    + ``::DecodeError``: When ``<client_token>`` was falsely segmented
   ####

***

2. Decipher a client token
    ```   
    QuicklinkService::Quicklink::Client::Decoder.call(<client_token>)
    ```
   This decodes a client token and returns its claims.
   ####
   ###### Data parameters
    1. ``<client_token>`` *<span style={{color:"#dc143c"}}>REQUIRED </span>*
        + String
        + ``<client_token>`` must be a JWT, solely issued by the ``QuicklinkService::Quicklink::Client::Encoder`` class

   ####
   ###### Pipeline
   First, the inputs are checked for correct formatting. Then ``<client_token>`` gets decoded.
   Neither ``<client_token>`` nor its claimed get further verified.
   ####
   ###### Return
    ```   
    [{<client_token_claims>}]
    ``` 
   ####
   ###### Exceptions
   ```
   CustomExceptions::InvalidInput
   ```
   You should only expect the following subclasses:
    + ``::Quicklink::Client``: When ``<client_token>`` is malformed
   ####    
     ```
   JWT
   ```
   You should only expect the following subclasses:
    + ``::ExpiredSignature``: When ``<access_token>`` has expired
    + ``::InvalidIssuerError``: When ``<access_token>`` was issued by an unknown issuer
    + ``::VerificationError``: When ``<access_token>`` was encoded with an unknown secret key and/or was tampered with
    + ``::IncorrectAlgorithm``: When ``<access_token>`` was encoded using a unknown/incompatible algorithm
    + ``::DecodeError``: When ``<access_token>`` was falsely segmented
   ####

***

### 5. Request token

1. Claim a request token
    ```   
    AuthenticationTokenService::Quicklink::Request::Encoder.call(<session>)
    ```
   This creates a request token for a given session.
   ####
   ###### Data parameters
    1. ``<session>`` *<span style={{color:"#dc143c"}}>REQUIRED </span>*
        + HashMap
        + ``<session>`` must be structured as follows:
          ```JSON
          "session": {
            "mode": "job",
            "success_url": "/success",
            "cancel_url": "/failure",
            "job_slug": "job#3",
            "title": "TestTitle",
            "description": "<div>This is the description</div>",
            "start_slot": "2024-01-16T04:10:09.463Z",
            "longitude": "11.613942994844358",
            "latitude": "48.1951076",
            "job_type": "Retail",
            "job_status": "listed",
            "position": "CEO",
            "currency": "EUR",
            "salary": "9",
            "key_skills": "Entrepreneurship",
            "duration": "9",
            "job_notifications": "1",
            "cv_required": "true",
            "allowed_cv_formats": [
              ".pdf",
              ".docx",
              ".txt",
              ".xml"
            ],
            "user_id": 1,
            "subscription_type": "premium"
          }
          ```
   ####
   ###### Pipeline
   First, the inputs are checked for correct formatting. Then ``<session>`` and its content get verified. This includes verification of the request mode and a check of whether the issuer is allowed to make such a request. Finally a request_token is generated based on the claims
   of ``<session>``:
    + ``sub`` - who owns the token?:``<client_id>``
    + ``exp`` - 30 minutes from the time of issue
    + ``session`` - contains all session data as specified above
    + ``iat`` - specifies the time of when the token has been issued``
    + ``iss`` - who issued the token?: The name of the machine that issues this token
   ####
   ###### Return
    ```   
    "<request_token>"
    ``` 
   ####
   ###### Exceptions
    ```
    CustomExceptions::Subscription
    ```
    + ``::ExpiredOrMissing``: When the ``session[:subscription_type]`` is insufficient for the requested ``session[:mode]``
    ####    
    ```
    CustomExceptions::InvalidInput
    ```
    You should only expect the following subclasses:
    + ``::Quicklink::Request``: When ``<client_token>`` is malformed
    + ``::Quicklink::Mode``: When ``session[:mode]`` is malformed
    ####    
    ```
    JWT
    ```
    You should only expect the following subclasses:
    + ``::ExpiredSignature``: When ``<client_token>`` has expired
    + ``::InvalidIssuerError``: When ``<client_token>`` was issued by an unknown issuer
    + ``::InvalidJtiError``: When ``<client_token>`` has a record on ``AuthBlacklist`` (the token is blocked)
    + ``::InvalidIatError``: When ``<client_token>`` was timestamped incorrectly
    + ``::InvalidSubError``: When the owner of ``<client_token>`` is unknown
    + ``::VerificationError``: When ``<client_token>`` was encoded with an unknown secret key and/or was tampered with
    + ``::IncorrectAlgorithm``: When ``<client_token>`` was encoded using a unknown/incompatible algorithm
    + ``::DecodeError``: When ``<client_token>`` was falsely segmented
    ####

***

2. Decipher an request token
    ```   
    QuicklinkService::Quicklink::Request::Decoder.call(<client_token>)
    ```
   This decodes a request token and returns its claims.
   ####
   ###### Data parameters
    1. ``<request_token>`` *<span style={{color:"#dc143c"}}>REQUIRED </span>*
        + String
        + ``<request_token>`` must be a JWT, solely issued by the ``QuicklinkService::Quicklink::Request::Encoder`` class

   ####
   ###### Pipeline
   First, the inputs are checked for correct formatting. Then ``<request_token>`` gets decoded.
   Neither ``<request_token>`` nor its claimed get further verified.
   ####
   ###### Return
    ```   
    [{<request_token_claims>}]
    ``` 
   ####
   ###### Exceptions
   ```
   CustomExceptions::InvalidInput
   ```
   You should only expect the following subclasses:
    + ``::Quicklink::Request``: When ``<request_token>`` is malformed
   ####    
     ```
   JWT
   ```
   You should only expect the following subclasses:
    + ``::ExpiredSignature``: When ``<request_token>`` has expired
    + ``::InvalidIssuerError``: When ``<request_token>`` was issued by an unknown issuer
    + ``::VerificationError``: When ``<request_token>`` was encoded with an unknown secret key and/or was tampered with
    + ``::IncorrectAlgorithm``: When ``<request_token>`` was encoded using a unknown/incompatible algorithm
    + ``::DecodeError``: When ``<request_token>`` was falsely segmented
   ####
