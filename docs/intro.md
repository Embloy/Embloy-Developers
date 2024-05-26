---
sidebar_position: 1
---

# Quickstart

Let's discover **Embloy in less than 5 minutes**.

:::tip
If you have no idea what Embloy does or why it could be useful for you, take a look at the comparison of different use cases and scenarios [here](./core/service-comparison).
:::

## Getting Started

**Try Embloy immediately** with **[new.embloy.com](https://vercel.com/new/clone?repository-url=https://github.com/Embloy/Embloy-Examples/tree/main/nextjs-ts&project-name=create-embloy-nextjs-ts&repository-name=create-embloy-nextjs-ts)**.

Or get started by **[creating a new Embloy account](https://embloy.com/register)**.

### What you'll need

- Verified Embloy account (The [free-tier subscription](https://embloy.com/dashboard/billing) is sufficient for local sandbox mode)

- [Node.js](https://nodejs.org/en/download/):
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

- Valid `client_token`. You can create one in our [recruiter portal (aka Embloy-Genius)](https://genius.embloy.com/settings?tab=access). 

  :::info
  Learn more about our token system [here](/docs/core/tokens/token_info).
  :::

## Integrate Embloy into your site

Integrate Embloy into your site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init embloy@latest my-embloy-test classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Embloy.

:::warning
_The classic template does not work yet. Instead, you will have to clone the following repository and install the dependencies using:_
```bash
git clone https://github.com/embloy/embloy-examples.git
cd embloy-examples/nextjs-ts
npm i
```
:::

## Start your site

Run the development server:

```bash
cd my-embloy-test # skip this step if you cloned the repository manually
echo "CLIENT_TOKEN=<your-client-token>" >> .env
npm run dev
```

The `cd` command changes the directory you're working with. In order to work with your newly created Embloy test site, you'll need to navigate the terminal there.

The echo `"CLIENT_TOKEN=..." >> .env` command sets the environment variable `CLIENT_TOKEN`. Think of it as an API key that is required for our [server-side SDKs](/docs/sdks/overview) to authorize and allow new applications to be accepted into your profile. 

:::info
Read more on the technology behind it in the [Quicklink documentation](/docs/category/quicklink/).   
:::

The `npm run dev` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000. Press the button to apply with your Embloy account.

Congratulations! You've successfully integrated the Embloy system into a test site, automatically generated a job, submitted an application for it, and are now able to review the application in the [recruiter portal (aka Embloy-Genius)](https://genius.embloy.com/hire).

## Next steps

While this brief introduction doesn't cover everything needed for a production environment, it does provide a solid understanding of the fundamental concepts of Embloy, including the account system, integration process, and the one-click application feature via the Embloy-Button. 

If you're interested in exploring Embloy, we suggest you start by taking a look at the [comparison of different use cases and scenarios](./core/service-comparison) and check out our [detailed guides](/docs/category/guides) for the next steps.