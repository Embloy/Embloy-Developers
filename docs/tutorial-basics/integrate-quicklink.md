---
sidebar_position: 4
---

# Integrate Quicklink

In this example, we've already integrated [Embloy's Node.js SDK](https://www.npmjs.com/package/embloy). All you need to do is provide your `client_token` and, optionally, your `job_slug` in the input fields.

Here's a brief explanation of how the pre-integrated code in this example works:

## Server-Side

On the server side all we need to do is create an endpoint that calls our Node.js SDK to request a URL to an application session for the job specified in the `job_slug` field. The user will then be redirected to this URL and apply there. The calling of our SDK has to be done on the server side as we need to keep your `client_token` secret.  

:::warning
In a production setting, you would typically only pass the `job_slug` to your endpoint and fetch the `client_token` from your environment variables to prevent accidental exposure of your `client_token`. However, in this example, we're hard-coding the `client_token` for simplicity:
:::

```TypeScript title="pages/api/example.ts"
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmbloyClient, EmbloySession } from 'embloy';

// ... other code

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const clientToken = process.env.CLIENT_TOKEN;
    const jobSlug = req.query.job_slug as string;

    // Some input validation ...
    if (!clientToken) {
      res.status(400).json({ error: 'client_token is required' });
      return;
    }

    if (!jobSlug) {
      res.status(400).json({ error: 'job_slug is required' });
      return;
    }

    // Call the Embloy SDK to request a link to an application session which we then want to redirect the user to
    let url = '';
    try {
      const embloy = new EmbloyClient(clientToken, new EmbloySession("job", jobSlug));
      url = await embloy.makeRequest(); // ✨ Here's where the magic happens ✨
    } catch (error) {
      console.error('Error making request:', error);
      res.status(500).json({ error: 'Error making request' });
      return;
    }

    // Redirect the user to the obtained URL
    if (url) {
      res.redirect(url);
    } else {
      res.status(500).json({ error: 'URL is not available' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
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
  setIsLoading(true);
  try {
    // Call your endpoint
    const response = await fetch('/api/example?job_slug=<your-job-slug>', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    // Check response
    if (!response.ok) {
      throw new Error('Error making request');
    }

    // Redirect the user to the application portal
    window.location.href = (await response.json()).url;
  } catch (error) {
    console.error('Error making request:', error);
  }
};
```

The only thing left is to add a button that calls this action:

```TSX title="app/page.tsx"
<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
  <button
    onClick={handleApplyClick}
    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  >
    <h2 className={`mb-3 text-4xl font-semibold`}>
      Apply with EMBLOY{' '}
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </h2>
    <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
      Click to apply for the job with EMBLOY.
    </p>
  </button>
</div>
```

When the user clicks on "Apply with EMBLOY", they will be redirected to Embloy's application portal.

