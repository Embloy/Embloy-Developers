---
sidebar_position: 1
---

# Quickstart

Let's discover **Embloy in less than 5 minutes**.

## Getting Started

Get started by **[creating a new Embloy account](https://embloy.com/register)**.

Or **try Embloy immediately** with **[new.embloy.com](https://vercel.com/new/clone?repository-url=https://github.com/Embloy/Embloy-Examples/tree/main/nextjs-ts&project-name=create-embloy-nextjs-ts&repository-name=create-embloy-nextjs-ts)**.

### What you'll need

- Verified Embloy Account (Basic subscription is sufficient for local sandbox mode)

- [Node.js](https://nodejs.org/en/download/):
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Integrate Embloy into your site

Integrate Embloy into your site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init embloy@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Embloy.

:::note
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
npm run dev
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm i` command install all required dependencies.

The `npm run dev` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.
