---
sidebar_position: 2
---

# Token customization

## Client token customization

You can customize your client tokens to have a custom expiration date, as well as to only accept applications submitted by verified users.

You can either use the appropriate feature on the token dashboard or the [following endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-86b2cf1c-b02e-4d83-b65f-9c5e03cc89c4).

## Request token customization

You can customize your request tokens to have custom applications session details, such as:
```JSON
  "session": {
    "client_id": 1,
    "subscription_type": "basic",
    "mode": "job",
    "success_url": "myjobpage.com/jobs/2/success",
    "cancel_url": "myjobpage.com/jobs/2/failure",
    "job_slug": "job#1"
  },
```

To customize it, please refer to the [tutorials](/docs/category/tutorial---extras), the [Embloy example implementations](https://github.com/embloy/embloy-examples), [this](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-7629b41f-882f-4897-bacd-5b900378eac6) endpoint documentation.