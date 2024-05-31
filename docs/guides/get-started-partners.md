---
sidebar_position: 3
---

# Getting started - ATS Partners

:::info
This guide outlines the technical steps required for Embloy partners, specifically ATS system providers, to integrate with Embloy. If you need additional information or have any questions, please [let us know](https://about.embloy.com/en/contact).
:::

Hey there! 👋 Welcome to Embloy! To enable your customers to seamlessly use Embloy in connection with your ATS, our systems need to be integrated. This will require a few technical steps, both from your side and ours.

If you already had experience with tools like Stripe's one-click checkout or PayPal's one-click payment, this integration will be very easy for you as the concept behind it is exactly the same.

# What needs to be done for the integration?

---

TL;DR: We need your API documentation and access to a sandbox or test account to start developing the integration. On your side, you need to implement features in your ATS to enable the Embloy button, which allows candidates to apply for jobs with a single click. This involves uploading an Embloy API key, authenticating the request by calling our SDKs using this key when a candidate applies for a job, and displaying the Embloy button on every job posting.

---

## Our side

To start developing the integration from our side, we'll only need 2 things from you:

- Your API documentation
- Access to a sandbox environment or a test account

We will then start developing the integration from our side based on these resources. We will ensure that you stay informed about the progress and will reach out to you if we need any additional information.

---

## Your side

The core component of Embloy is the Embloy button, which is placed on job boards to allow candidates to apply for jobs with a single click. To enable this functionality, you need to implement the following features in your ATS:

### Step 1: Embloy API key upload

Implement a feature in your ATS that allows customers to upload an Embloy API key Embloy API key (aka [client token](/docs/core/tokens/token_info#client-token)). This key is necessary for security reasons and to request authentication to submit an application to the Embloy API.

:::note
We use the terms "Embloy API key" and "client token" interchangeably.
:::

### Step 2: Authenticate the request

Implement a feature that retrieves the Embloy API key and a job or posting ID when a candidate applies for a job using the Embloy button. This information is used to send a request to the Embloy API, which returns a redirection URL for the applicant. You will need to add an endpoint to your backend for this purpose. You can either manually implement this or use one of Embloy's [SDKs](/docs/sdks/overview).

The process behind it is the same for both approaches and involves two steps:

1.  When a user presses on the "Apply with Embloy" button, your frontend makes a call to your new endpoint, including your job's posting ID

    > e.g., `<your-api>/<your-endpoint>?postingID=<your-posting-ID>`

2.  The endpoint internally uses the uploaded client token and your job's posting ID to either call our [SDKs](/docs/sdks/overview) directly or to call [this endpoint](https://docs.embloy.com/#7629b41f-882f-4897-bacd-5b900378eac6). This will return a link to which the user needs to be redirected.

    > If you use Rails, this could look like this:
    >
    >       ```ruby
    >       client_token = ... # Retrieve client token for the employer/owner of this job posting
    >       posting_id = params["postingID"] # The job's posting ID  needs to be passed to this endpoint
    >
    >       # Call our SDK (or manually the api.embloy.com/api/v0/sdk/request/auth/token endpoint)
    >       session = {mode: "your-ats-name", job_slug: posting_id}
    >       client = Embloy::Client.new(client_token, session)
    >       redirect_url = client.make_request
    >
    >       redirect_to redirect_url # Return the URL to which the user needs to be redirected
    >       ```
    >
    > :::tip
    > See our [SDK documentation](/docs/sdks/overview.mdx) for other examples and more details.
    > :::

### Step 3: The "Apply with Embloy" button

The Embloy button needs to be displayed on every job posting on the job board of customers of your ATS that enabled the Embloy integration and make a call to the endpoint defined in step 2.

For this part, you can think of an approach that works best for you, but most of the time, the high-level structure looks like:

```TSX title="application-form.tsx"
const handleApplyClick = async () => {
  try {
    // Call your endpoint as defined in step 2
    const response = await fetch('<your-api>/<your-endpoint>?postingID=<your-posting-ID>', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    // Redirect the user to the application portal
    window.location.href = (await response.json()).url;
  }
};
```

The only thing left is to add a button to your UI that calls this action:

```TSX title="app/application-form.tsx"
<button onClick={handleApplyClick}>
  <img src="https://embloy.com/images/button-black_large.svg" style={{ width: "300px", height: "auto" }} />
</button>
```

When the user clicks on "_Embloy Apply_ ", they will be redirected to Embloy's application portal.

---

## Testing & Launch

After both sides have implemented their parts, we will conduct a thorough testing phase to ensure that the integration works as expected.

Once the integration has been successfully tested, we will launch the integration and make it available to your customers.

---

## FAQ

<details>
<summary>Why do we need to save a client token and make an API call using Embloy's SDKs before redirecting the user instead of just hardcoding a link to a job (e.g., `embloy.com/apply?jobPostingId=...`)?</summary>

_There are two reasons for this:_

1. _**Security**: We need to ensure that applications for a certain job are only submitted from a site where the employer has uploaded the application form (e.g., your job posting). For this, we need the client token (aka Embloy API key)._
2. _**Authentication of the request**: We need to verify that a redirection to our portal has been done by an Embloy customer who is authorized for this action. Hence, to authenticate the request, you call our SDKs using the customer's (secret) client token to return a (public and short-lived) request token which we then verify._
</details>

<details>
<summary>Why don't you just use our ATS system's webhooks to automatically receive all job postings for a given user?</summary>

_**To avoid unnecessary storage of sensitive information**, when a customer integrates Embloy, we don't directly fetch all his jobs. We only request jobs from your ATS system's API on a need-to-know basis, meaning that when a customer uses the button on a new job posting, this job posting is unknown to Embloy's API. When a user applies for this job using Embloy, we automatically check whether we already have this job or not, and if not, we then fetch it from your API. That's also why the authentication steps, as explained above, are so important._

</details>

<details>
<summary>Do I need to use Embloy's SDKs?</summary>

_**No**. You can use our [open source SDKs](https://github.com/embloy), but if you don't want to, you can do it manually - you just have to call [this endpoint](https://docs.embloy.com/#7629b41f-882f-4897-bacd-5b900378eac6)._

</details>

<details>
<summary>Embloy doesn't provide an SDK for my backend framework. What should I do?</summary>

_We try to provide SDKs for the most popular frameworks, but if we don't support yours yet, **please contact us** and we'll either create a new SDK or explain you in detail how to do it manually using [this endpoint](https://docs.embloy.com/#7629b41f-882f-4897-bacd-5b900378eac6)._

</details>

Any other questions? Just [reach out to us](https://about.embloy.com/en/contact) and we'll do our best to help.
