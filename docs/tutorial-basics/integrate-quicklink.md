---
sidebar_position: 4
---

# Integrate Quicklink

Docusaurus creates a **page for each blog post**, but also a **blog index page**, a **tag system**, an **RSS** feed...

## Server-Side

Create a file `your-api/server.js` in your backend to add a `make_request` endpoint:

```JavaScript title="your-api/server.js"
const clientToken = process.env.CLIENT_TOKEN;
const response = await axios.post(
    'http://localhost:3000/api/v0/sdk/request/auth/token',
    {},
    {
    headers: {
        client_token: clientToken,
    },
    }
);
const requestToken = response.data.request_token;
res.redirect(302, `https://embloy.com/sdk/apply?token=${requestToken}`);
```

A new endpoint is now available at [http://localhost:3000/api/make_request](http://localhost:3000/api/make_request).

## Client-Side

Update your client to call the `make_request` endpoint:

```JavaScript title="your-api/server.js"
<a className="App-link" href="https://<your-web-sevice>/api/make_request">Apply with EMBLOY</a>
```

When pressing on "Apply with EMBLOY", a user is now redirected to Embloy's application portal.
