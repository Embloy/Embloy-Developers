---
sidebar_position: 1
---

# Token system

A brief overview of what our most commonly used tokens are and how they work.

:::warning
JWTs are credentials that can grant access to resources. Be careful where you paste them!
:::

## Refresh token

> Validity: **2 WEEKS** - see [**_Example refresh token_**](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNDk2MDA2NCwianRpIjoiMWEyODE5MzE5ZGMzNDQ4OTZkYWQ2YjY4ODA1OWNjYzgiLCJpYXQiOjE3MDQ5NDU2NjQsImlzcyI6Im1hbmtkZSJ9.mYCEoi39xVg-AzsF8X7g-7d60xdEEmUsoUzBURV0CsQ)

Refresh tokens are weak authentication tokens that have no other purpose than being used to _refresh_ an access token once it has expired.
If a refresh token expires, the user has to re-login using his credentials so that a new refresh token is generated.

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-2c38042b-45e7-4de4-8171-ddc3f53a0182).
:::

## Access token

> Validity: **20 MINUTES** - see [**_Example access token_**](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcxODMyMjg2NSwidHlwIjoidmVyaWZpZWQiLCJzY29wZSI6ImFwaS5lbWJsb3kuY29tL2FwaS5yZWFkIiwiaXNzIjoiYXBpLmVtYmxveS5jb20ifQ.uSrpVsqOTksmYZ5l5srSbq6o3CxtpiSXWYjVxpO_0ls)

Access tokens are used as the main method of authentication for all Embloy services. Access tokens can be generated using a valid refresh token and are only valid for their defined scope.

Access token scopes determine the permissions of the token. They need to align with the base URL of the application and the path being requested. For instance, a token with the scope `genius.embloy.com/api.write` cannot access services at `api.embloy.com` because the base URL doesn't match. Similarly, a token with the scope `api.embloy.com/api.write` can access all endpoints under the `/api` path of the `api.embloy.com` service, but it can't be used to request the path `/abc/xyz`. Lastly, the operations allowed on an endpoint are either `write` or `read`. Make sure the scope has the appropriate permissions for the HTTP method you want to use (`read` only allows GET requests, while `write` allows all request methods).

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-e29e5a54-533b-413a-9e04-b608cc4acd68).
:::

## Client token

> Validity: **3 MONTHS** (by default, but can be customized) - see [**_Example client token_**](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNzU4Mjk5NCwidHlwIjoiZW50ZXJwcmlzZV8xIiwiaWF0IjoxNzA0OTQ1Njk4LCJpc3MiOiJtYW5rZGUifQ.eNaE4XJTMLO-etaK66uS0Aa6jTD5KuKMPya8_NXKLQQ)

Client tokens can be seen as an Embloy-API token, which a client needs to have in order to use Embloy's SDKs. The purpose of the client token is to transmit a client's ID and subscription tier when generating request tokens.

:::note
Whenever you change your subscription plan, you will have to update your client token(s) to access the newly subscribed features.
:::

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4).
:::

## Request token

> Validity: **30 MINUTES** - see [**_Example request token (minimum payload)_**](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNTQ4NjQxNSwic2Vzc2lvbiI6eyJtb2RlIjoiam9iIiwiam9iX3NsdWciOiJqb2IjMyIsInVzZXJfaWQiOjEsInN1YnNjcmlwdGlvbl90eXBlIjoicHJlbWl1bSJ9LCJpYXQiOjE3MDUzNzg0MTUsImlzcyI6Im1hbmtkZSJ9.4Dtdf6C9wHSpjsX0zv3LGiGbVX71dD8uprOU3AqXuQE) and [**_Example request token (maximum payload)_**](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNTQ4NjIwOSwic2Vzc2lvbiI6eyJtb2RlIjoiam9iIiwic3VjY2Vzc191cmwiOiIvc3VjY2VzcyIsImNhbmNlbF91cmwiOiIvZmFpbHVyZSIsImpvYl9zbHVnIjoiam9iIzMiLCJ0aXRsZSI6IlRlc3RUaXRsZSIsImRlc2NyaXB0aW9uIjoiPGRpdj5UaGlzIGlzIHRoZSBkZXNjcmlwdGlvbjwvZGl2PiIsInN0YXJ0X3Nsb3QiOiIyMDI0LTAxLTE2VDA0OjEwOjA5LjQ2M1oiLCJsb25naXR1ZGUiOiIxMS42MTM5NDI5OTQ4NDQzNTgiLCJsYXRpdHVkZSI6IjQ4LjE5NTEwNzYiLCJqb2JfdHlwZSI6IlJldGFpbCIsInN0YXR1cyI6InB1YmxpYyIsInBvc2l0aW9uIjoiQ0VPIiwiY3VycmVuY3kiOiJFVVIiLCJzYWxhcnkiOiI5Iiwia2V5X3NraWxscyI6IkVudHJlcHJlbmV1cnNoaXAiLCJkdXJhdGlvbiI6IjkiLCJqb2Jfbm90aWZpY2F0aW9ucyI6IjEiLCJjdl9yZXF1aXJlZCI6InRydWUiLCJhbGxvd2VkX2N2X2Zvcm1hdHMiOlsiLnBkZiIsIi5kb2N4IiwiLnR4dCIsIi54bWwiXSwidXNlcl9pZCI6MSwic3Vic2NyaXB0aW9uX3R5cGUiOiJwcmVtaXVtIn0sImlhdCI6MTcwNTM3ODIwOSwiaXNzIjoibWFua2RlIn0.yvnA0c-9-zFpgDN78U3CnYBzS070-6S57MZbd6ndwBY)

Request tokens can be generated using a valid client token and act as confirmation that a job posting using the "_Apply with EMBLOY_" button is really verified and connected to Embloy. Therefore, whenever a user presses on "_Apply with EMBLOY_", a request to the client's server is made to generate a new request token for the given job with the secret client token.

When a request token is generated, it can be used to submit an application for a given job. Every request token saves the owner's ID (=client) and information about the job for which it is used, as well as information related to the requested application session, such as the success_url, cancel_url and more.

**The only required field to create a request token is `job_slug` which is used to identify a client's job, which is not known to Embloy yet. All other fields are optional and can be used to customize the application process. See also the [token customization documentation](/docs/core/quicklink/token_customization).**

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-7629b41f-882f-4897-bacd-5b900378eac6).
:::

## Genius-Query token

> Validity: **1 day** (by default, but customizable up to a year)

[Genius-Query](./../genius_queries) tokens can be generated by all subscribed users either through the Genius dashboard or manually using an access token. A valid token grants access to specific resources for a defined duration..

:::tip
**For a comparison between Genius-Query and Quicklink, refer to the [scenario comparison](./../service-comparison.md).**
:::

Genius-Query tokens resemble request tokens but offer additional flexibility. Unlike request tokens, which are generated when a user applies via Quicklink and are only valid for a short amount of time, Genius-Query tokens can be tailored with a custom expiration date and are capable of accessing specific resources (such as a job, account, or application) rather than just jobs.

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-a9d49a6e-249b-446c-8ab5-336f751aff5e).
:::

## Password-reset token

> Validity: **15 minutes**

If you forgot your password and want to reset it manually, you will need a password-reset token, which is included in the password reset email we sent you.

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-969a3f0a-af9e-4e62-9eb1-a72110864f27).
:::

## Activation token

> Validity: **1 day**

When you create a new account manually (= without using any of the provided OAuth options), you will have to confirm your email before being able to access any Embloy services. An email including the activation token is automatically sent to your account's email-address after account creation.

:::tip
If you did not activate your account and your activation token has expired, you can request a new activation token [here](https://embloy.com/activation-token).
:::

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-85e5315d-f144-4479-822b-265bb356d0e2) and [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-75b9eed7-22e0-4978-8693-04926bb0ebf0).
:::
