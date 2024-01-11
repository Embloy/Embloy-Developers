---
sidebar_position: 1
---

# Token system

A brief overview of what our most commonly used tokens are and how they work. 

## Refresh token

> Validity: **2 WEEKS**

Refresh tokens are weak authentication tokens that have no other purpose than being used to _refresh_ an access token once expired. 
If a refresh token expires, the user has to re-login using his credentials so that a new refresh token is generated.

For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-2c38042b-45e7-4de4-8171-ddc3f53a0182) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).


## Access token

> Validity: **2 HOURS**

Access tokens are used as the main method of authentication to all embloy services. Access tokens can be generated using a valid refresh token. For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-e29e5a54-533b-413a-9e04-b608cc4acd68) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).

## Client token

> Validity: **3 MONTHS** (per default, but can be customized to a date valid within the user's subscription)

Client tokens can be seen as an Embloy-API token which a client needs to have in order to use Embloy's SDKs. The client token purpose is to transmit a client's ID and subscription tier when generating request tokens.

For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).

## Request token

> Validity: **30 MINUTES**

Request tokens can be generated using a valid client token and act as a confirmation that a job posting using the "_Apply with EMBLOY_" button is really verified and connected to Embloy. Therefore, whenever a user presses on "_Apply with EMBLOY_", a request to the client's server is made to generate a new request token for the given job with the secret client token.

 When a request token is generated, it can be used to submit an application for a given job. Every access token saves the owner's ID (=client) and information about the job for which it is used.   

For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-cb4b3c33-f0b8-4f76-af72-f8b325e16bb8) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).

## Password-reset token

If you forgot your password and want to reset it manually, you will need a password-reset token which is included in the password reset email we sent you.

For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-969a3f0a-af9e-4e62-9eb1-a72110864f27) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).