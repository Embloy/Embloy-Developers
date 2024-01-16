---
sidebar_position: 2
---

# Token customization

## Client token customization

You can customize your client tokens to have a custom expiration date, as well as to only accept applications submitted by verified users.

You can either use the appropriate feature on the token dashboard or [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4).

## Request token customization

Request tokens only require you to set the `job_slug` field. 
The default value for `mode` is `"job"` and for the `success_url` and `cancel_url` the referrer of the request (e.g., your website).
If you already created a custom job in Embloy, you can leave all other fields empty, as they will be ignored either way. 

:::tip
If you didn't create a custom job, you can customize the request token to have certain values and enable or disable certain features (e.g., requiring the user to submit a CV in a certain file format) by setting the appropriate fields when creating a session. 
:::

If you didn't create a custom job and left all request token fields empty (besides `job_slug`), Embloy automatically creates an empty job linked to your account. which users can then apply for.

You can customize your request tokens to have custom application session details, such as:
```JSON
  "session": {
    "mode": "job",
    "success_url": "/success",
    "cancel_url": "/failure",
    "job_slug": "job#3",
    "title": "TestTitle",
    "description": "<div>This is the description</div>",
    "start_slot": "2024-01-16T04:03:04.825Z",
    "longitude": "11.613942994844358",
    "latitude": "48.1951076",
    "job_type": "Retail",
    "status": "public",
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
    ]
}
```

To customize it, please refer to the [tutorials](/docs/category/tutorial---extras), the [Embloy example implementations](https://github.com/embloy/embloy-examples), or [this](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-7629b41f-882f-4897-bacd-5b900378eac6) endpoint documentation.