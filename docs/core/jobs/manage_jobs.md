---
sidebar_position: 2
---

# Manage jobs

All about features related to jobs on Embloy.

## Your jobs

If you want to find all jobs created by you manually, you can use [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-0214db05-841a-452d-bad9-19e0a0187e6a).

### Job visibility

Jobs have three different visibility status values:

- `Public`: Accessible by everyone

- `Private`: Only visible to you and applicants with a request tokens for this job (e.g., when using the "Apply with Embloy" Button on your page)

- `Archived`: Only visible to you

:::info
When creating a job, you can set its visibility. The default visibility for jobs created manually is `public`. The default visibility for jobs created automatically via Quicklink is `private` (see [here](./create_jobs.md#automatically-create-jobs-with-quicklink)).
::::

### Job activation and deactivation

Whenever you create a new job, it is automatically activated. If we notice suspicious activity on your job or if it does not conform to our terms of service, we can deactivate it. If your job is deactivated, this doesn't mean that it is deleted; only you can still access it, and it won't be accessible for other users.

### Find a specific job

If you want to find a specific job manually, you can use [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-c2661a5f-45ec-404f-81d6-f05b112ef1cc).

### Update your job

You can update all jobs created by you by clicking on one of your jobs and going to the "edit" page. Generally, you can update all fields (e.g., job_slug, title, description, address, visibility, etc.) besides the job activation- and deactivation status.

If you want to update one of your jobs manually, you can use [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-8917ff93-4b2b-486c-849b-a63e6d2b450e).

### Delete your job

If you want to delete one of your jobs manually, you can use [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-ca649118-734f-426d-8833-ec2395a7e720).

:::danger
This is a destructive action and cannot be undone!
:::

## Jobs you applied for

You can find the jobs you applied for by going to your application section and then clicking on the application's job. Find out more about that in the [application documentation](https://developers.embloy.com/docs/category/applications).

## Upcoming jobs

All jobs for which you successfully applied for and were accepted can be seen in the "upcoming jobs" section of your Embloy dashboard. Per default, this is the first screen that you see when logging into your Embloy account.

If you want to find your upcoming jobs manually, you can use [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-8f9af903-11f1-4822-8ba5-7f31ba908862).
