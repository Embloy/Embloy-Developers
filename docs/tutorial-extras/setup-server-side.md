---
sidebar_position: 5
---

# Server-Side

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
