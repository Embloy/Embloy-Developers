---
sidebar_position: 5
---

# Genius-Queries

Information on the Genius-Query-based application approach of the core API.
 
:::note
If you want to use Genius-Queries, you need to be subscribed to at least Embloy-Smart to be able to use this feature.
:::

## Link to a job via Genius-Query

Genius-Queries are similar to request tokens but offer additional flexibility. Unlike request tokens, which are automatically generated when a user applies via Quicklink and are only valid for a short amount of time, a Genius-Query can be tailored with a custom expiration date and is capable of accessing specific resources (such as a job, account, or application) rather than just jobs.

However, Genius-Queries need to be created manually via your [Genius Dashboard](https://genius.embloy.com/recruiting), or using [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-a9d49a6e-249b-446c-8ab5-336f751aff5e). 

Genius-Queries can be seen as a permanent link to a resource (e.g., a job), which enables you to integrate Embloy on static pages (e.g., on a plain HTML job page).

## Apply via Genius-Query

For applicants, the application process is exactly the same as with [Quicklink](./quicklink/quicklink_dataflow), and can be read [here](./quicklink/quicklink_application).

:::tip
**For a comparison between Genius-Query and Quicklink, refer to the [scenario comparison](./service-comparison).**
:::
