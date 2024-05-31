---
sidebar_position: 3
---

# Getting started - ATS Partners

:::info
This guide outlines the technical steps required for Embloy partners, specifically ATS system providers, to integrate with Embloy. If you need additional information or have any questions, please [let us know](https://about.embloy.com/en/contact).
:::

Hey there! 👋 Welcome to Embloy! To enable your customers to seamlessly use Embloy in connection with your ATS, our systems need to be integrated. This requiers a few technical steps both from your side and ours.

# What need's to be done for the integration?


## Our side
To start developing the integration from our side, we'll only need 2 things from you:
- Your API documentation
- Access to a sandbox environment or a test account

We will then start developing the integration from our side based on these resources. We will ensure that you stay informed about the progress and will reach out to you if we need any additional information.

## Your side

### Embloy button integration
The core component of Embloy is the Embloy button, which is placed on job boards to allow candidates to apply for jobs with a single click. To enable this functionality, you need to implement the following features in your ATS:

### Embloy API Key Upload
The Embloy button needs to be displayed on every Job Posting on the Job board of customers of your ATS that enabled the Embloy integration.

### Backend call to Embloy API
When a candidate applies for a job using the Embloy button, the ATS needs to retrieve the Embloy API key as well as an Job or Posing ID send a request to the Embloy API. This will retrieve a redirection URL for the applicant.

## Testing
After both sides have implemented their parts, we will conduct a thorough testing phase to ensure that the integration works as expected. 

## Launch
Once the integration has been successfully tested, we will launch the integration and make it available to your customers.
