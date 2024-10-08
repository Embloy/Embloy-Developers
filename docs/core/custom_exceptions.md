---
sidebar_position: 10
---

# Custom exceptions

Information on Embloy-Core's custom exceptions.

:::note
This is only relevant if you plan to contribute to any of our SDKs or APIs or plan to develop your own integration.
:::

### 1. InvalidUser

You should only expect the following subclasses of `::InvalidUser`

- `::Unknown`: When there is no record for a given `<user_id>`
- `::CredentialsWrong`: When the user's credentials are not valid and the authentication process failed
- `::LoggedOut`: > (non-API-only) When the session token is invalid / nil (`Current.user` is nil)
- `::Inactive`: `Current.user` is deactivated (`activity_status = 0`)

---

### 2. Unauthorized

You should only expect the following subclasses of `::Unauthorized`

- `::NotOwner`: `Current.user` is not the owner of the resource that he is trying to access
- `::InsufficientRole`: User does not have the required role to access the resource
  - `::NotAdmin`
  - `::NotEditor`
  - `::NotDeveloper`
  - `::NotModerator`
  - `::NotVerified`
- `::Blocked`: User is blacklisted

####

---

### 3. InvalidInput

You should only expect the following subclasses of `::InvalidInput`

- `::Token`: When the`<refresh_token>` is invalid
- `::SUB`: When the `<refresh_token>` is malformed (e.g., `user_id` not an Integer)
- `::CustomEXP`: When the `<refresh_token>` expired
- `::BlankCredentials`: For missing credentials (email, password)
- `::GeniusQuery`: Related to genius queries
  - `::Blank`
  - `::Malformed`
  - `::Removed`
- `::Quicklink`: Related to Quicklink
  - `::Client` Related to client tokens
    - `::Blank`
    - `::Malformed`
  - `::Request` Related to request tokens
    - `::Blank`
    - `::Malformed`
    - `::Forbidden`
    - `::NotFound`
  - `::Mode` Related to the requested application portal mode
    - `::Malformed`
  - `::ApiKey` Related to the connected third party API key
    - `::Malformed`
    - `::Missing`
    - `::Unauthorized`
    - `::Inactive`
  - `::OAuth` Related to the connected third party OAuth app
    - `::Unauthorized`
    - `::Forbidden`
    - `::NotFound`
    - `::NotAcceptable`
  - `::Application` Related to the application submission to the third party API
    - `::Malformed`
    - `::Unauthorized`
    - `::Duplicate`

  ####

---

### 4. InvalidJob

You should only expect the following subclasses of `::InvalidJob`

- `::Unknown`: When there is no record of jobs for a given `job_id`
- `::Inactive`: When a job has been deactivated
  ####

---

### 5. Subscription

You should only expect the following subclasses of `::Subscription`

- `::ExpiredOrMissing`: Subscription is either expired or not existent
- `::LimitReached`: You've reached the maximum number of allowed resources for your subscription type

####
