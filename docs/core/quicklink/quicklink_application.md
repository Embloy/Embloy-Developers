---
sidebar_position: 1
---

# Submit a new application via Quicklink

_Apply with one click._

## What is Quicklink?

Quicklink is Embloy's SDK to allow visitors of your page to submit new applications with just one click.

## How can you integrate Quicklink

> **Prerequisites**: If you want to integrate Quicklink into your site, you need to be subscribed to at least _Embloy-Smart_ to be able to use this feature. 

You can find example implementations at [Embloy Examples](https://github.com/embloy/embloy-examples).

1. Create a client token and save it in your backend's environment file.

2. Create a new endpoint in your backend that loads the client token and creates a new embloy application session using the application portal endpoint from our SDK (see [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-7629b41f-882f-4897-bacd-5b900378eac6)).
The only required field is `job_slug` that is our way to identify a job which may not be known to us yet. InIn the event of a successful, a new blank job will be created (in case it didn't already exist) for your Embloy account. You can then edit this job in the Embloy dashboard.

    > **IMPORTANT**: Make sure to use unique job_slugs for each different job posting you make, as they is used to identify a client's job. Of course, you can use the same job_slug multiple times on different pages as long as you want all applications submitted to these pages to be linked to the job identified by the job_slug.

    Optionally, you can customize certain features, such as the `mode`, `success_url`, `cancel_url` and `job_id` of the application portal.
    If none of these fields are set, it will redirect to the referrer URL in the case of a successful or canceled application and use `job` as the default request mode.

3. Redirect to Embloy using the link provided in the `url` field of the response to the request. The link should look something like: `https://embloy.com/sdk/apply?request_token=<request-token>`.

4. The user applies using Embloy.

5. When the application has been submitted, the user gets redirected back to your site (or the `success_url`/`cancel_url` set by you).

## How can you apply using Quicklink

_Coming soon ..._