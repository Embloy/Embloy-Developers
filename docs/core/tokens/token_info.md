---
sidebar_position: 1
---

# Token system

A brief overview of what our most commonly used tokens are and how they work. 

:::warning 
JWTs are credentials that can grant access to resources. Be careful where you paste them!
:::

## Refresh token

> Validity: **2 WEEKS** - see [***Example refresh token***](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNDk2MDA2NCwianRpIjoiMWEyODE5MzE5ZGMzNDQ4OTZkYWQ2YjY4ODA1OWNjYzgiLCJpYXQiOjE3MDQ5NDU2NjQsImlzcyI6Im1hbmtkZSJ9.mYCEoi39xVg-AzsF8X7g-7d60xdEEmUsoUzBURV0CsQ)

Refresh tokens are weak authentication tokens that have no other purpose than being used to _refresh_ an access token once it has expired. 
If a refresh token expires, the user has to re-login using his credentials so that a new refresh token is generated.

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-2c38042b-45e7-4de4-8171-ddc3f53a0182) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).
:::

## Access token

> Validity: **2 HOURS** - see [***Example access token***](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNDk0Njg4NCwidHlwIjoidmVyaWZpZWQiLCJpc3MiOiJtYW5rZGUifQ.qCVGzzpenV6AzEeQDlUT0X69Q7oiDf_OQKllthKiB4E)

Access tokens are used as the main method of authentication for all Embloy services. Access tokens can be generated using a valid refresh token. 

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-e29e5a54-533b-413a-9e04-b608cc4acd68) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).
:::

## Client token

> Validity: **3 MONTHS** (by default, but can be customized) - see [***Example client token***](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNzU4Mjk5NCwidHlwIjoiZW50ZXJwcmlzZV8xIiwiaWF0IjoxNzA0OTQ1Njk4LCJpc3MiOiJtYW5rZGUifQ.eNaE4XJTMLO-etaK66uS0Aa6jTD5KuKMPya8_NXKLQQ)

Client tokens can be seen as an Embloy-API token, which a client needs to have in order to use Embloy's SDKs. The purpose of the client token is to transmit a client's ID and subscription tier when generating request tokens.

:::note
Whenever you change your subscription plan, you will have to update your client token(s) to access the newly subscribed features.
:::

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).
:::

## Request token

> Validity: **30 MINUTES** - see [***Example request token (minimum payload)***](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNTQ4NjQxNSwic2Vzc2lvbiI6eyJtb2RlIjoiam9iIiwiam9iX3NsdWciOiJqb2IjMyIsInVzZXJfaWQiOjEsInN1YnNjcmlwdGlvbl90eXBlIjoicHJlbWl1bSJ9LCJpYXQiOjE3MDUzNzg0MTUsImlzcyI6Im1hbmtkZSJ9.4Dtdf6C9wHSpjsX0zv3LGiGbVX71dD8uprOU3AqXuQE) and [***Example request token (maximum payload)***](https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwNTQ4NjIwOSwic2Vzc2lvbiI6eyJtb2RlIjoiam9iIiwic3VjY2Vzc191cmwiOiIvc3VjY2VzcyIsImNhbmNlbF91cmwiOiIvZmFpbHVyZSIsImpvYl9zbHVnIjoiam9iIzMiLCJ0aXRsZSI6IlRlc3RUaXRsZSIsImRlc2NyaXB0aW9uIjoiPGRpdj5UaGlzIGlzIHRoZSBkZXNjcmlwdGlvbjwvZGl2PiIsInN0YXJ0X3Nsb3QiOiIyMDI0LTAxLTE2VDA0OjEwOjA5LjQ2M1oiLCJsb25naXR1ZGUiOiIxMS42MTM5NDI5OTQ4NDQzNTgiLCJsYXRpdHVkZSI6IjQ4LjE5NTEwNzYiLCJqb2JfdHlwZSI6IlJldGFpbCIsInN0YXR1cyI6InB1YmxpYyIsInBvc2l0aW9uIjoiQ0VPIiwiY3VycmVuY3kiOiJFVVIiLCJzYWxhcnkiOiI5Iiwia2V5X3NraWxscyI6IkVudHJlcHJlbmV1cnNoaXAiLCJkdXJhdGlvbiI6IjkiLCJqb2Jfbm90aWZpY2F0aW9ucyI6IjEiLCJjdl9yZXF1aXJlZCI6InRydWUiLCJhbGxvd2VkX2N2X2Zvcm1hdHMiOlsiLnBkZiIsIi5kb2N4IiwiLnR4dCIsIi54bWwiXSwidXNlcl9pZCI6MSwic3Vic2NyaXB0aW9uX3R5cGUiOiJwcmVtaXVtIn0sImlhdCI6MTcwNTM3ODIwOSwiaXNzIjoibWFua2RlIn0.yvnA0c-9-zFpgDN78U3CnYBzS070-6S57MZbd6ndwBY)

Request tokens can be generated using a valid client token and act as confirmation that a job posting using the "_Apply with EMBLOY_" button is really verified and connected to Embloy. Therefore, whenever a user presses on "_Apply with EMBLOY_", a request to the client's server is made to generate a new request token for the given job with the secret client token.

When a request token is generated, it can be used to submit an application for a given job. Every request token saves the owner's ID (=client) and information about the job for which it is used, as well as information related to the requested application session, such as the success_url, cancel_url and more.   

**The only required field to create a request token is `job_slug` which is used to identify a client's job, which is not known to embloy yet. All other fields are optional and can be used to customize the application process. See also the [token customization documentation](https://developers.embloy.com/docs/core/quicklink/token_customization).**

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-7629b41f-882f-4897-bacd-5b900378eac6) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).
:::

## Password-reset token

If you forgot your password and want to reset it manually, you will need a password-reset token, which is included in the password reset email we sent you.

:::info
For more information, see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-969a3f0a-af9e-4e62-9eb1-a72110864f27) or the [AuthenticationTokenService](../tokens/authentication_token_service.md).
:::