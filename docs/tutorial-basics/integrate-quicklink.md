---
sidebar_position: 4
---

# Integrate Quicklink

In this example, we've already integrated [Embloy's Node.js SDK](https://www.npmjs.com/package/embloy). All you need to do is provide your `client_token` and, optionally, your `job_slug` in the input fields.

Here's a brief explanation of how the pre-integrated code in this example works:

## Server-Side

On the server side all we need to do is create an endpoint that calls our Node.js SDK to request a URL to an application session for the job specified in the `job_slug` field. The user will then be redirected to this URL and apply there. The calling of our SDK has to be done on the server side as we need to keep your `client_token` secret.  

:::warning
Don't forget to paste your `client_token` in your `.env` file as in a production setting, you should only pass the `job_slug` to your endpoint and fetch the `client_token` from your environment variables to prevent accidental exposure of your `client_token`.
:::

```TypeScript title="pages/api/example.ts"
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmbloyClient, EmbloySession } from 'embloy';

// ... other code

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const clientToken = process.env.CLIENT_TOKEN;
    const jobSlug = req.query.job_slug as string;

    // ... some input validation

    // Call the Embloy SDK to request a link to an application session which we then want to redirect the user to
    try {
      const embloy = new EmbloyClient(clientToken, new EmbloySession("job", jobSlug));
      const url = await embloy.makeRequest(); // ✨ Here's where the magic happens ✨
      // Return the URL to the client
      res.status(200).json({ url: url });
    } catch (error) {
      res.status(500).json({ error: "Error making request" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

// ... other code

```

## Client-Side

Your client needs to call the above endpoint, to redirect to Embloy's application portal:

:::info
Optionally, you can set the `job_slug` in line 14 of `app/page.tsx` to one of your own jobs' `job_slug`.
:::

```TSX title="app/page.tsx"
const handleApplyClick = async () => {
  try {
    // Call your endpoint
    const response = await fetch('/api/example?job_slug=<your-job-slug>', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    // Check response
    if (!response.ok) throw new Error('Error making request');

    // Redirect the user to the application portal
    window.location.href = (await response.json()).url;
  } catch (error) console.error('Error making request:', error);
};
```

The only thing left is to add a button that calls this action:

```TSX title="app/page.tsx"
<button onClick={handleApplyClick}>
  <img src="https://embloy.com/images/button-black_large.svg" style={{ width: "300px", height: "auto" }} />
</button>
```

When the user clicks on "_Embloy Apply_ ", they will be redirected to Embloy's application portal.

