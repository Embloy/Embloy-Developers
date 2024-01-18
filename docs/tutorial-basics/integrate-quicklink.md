---
sidebar_position: 4
---

# Integrate Quicklink

For this example, we already integrated [Embloy's Node.js SDK](https://www.npmjs.com/package/embloy), so all you have to do is insert your client token into `pages/api/make_request.ts`. 

For more details, this is how the code that is already implemented in the example you have works:

## Server-Side

The `pages/api/make_request.ts` file works as your backend and has one `make_request` endpoint:

```TypeScript title="pages/api/make_request.ts"
import { NextApiRequest, NextApiResponse } from 'next';
import EmbloyClient from 'embloy';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Make the request to the external API
    const embloy = new EmbloyClient('your-client-token', {
      mode: "job",
      job_slug: "job#1"
    });
    
    // Make the request and handle the response
    embloy.makeRequest()
      .then((result: { token: any; }) => {
        const requestToken = result; // Assuming the result object has a token property
        // Redirect to the apply page with the request_token
        res.setHeader('Location', `https://embloy.com/sdk/apply?token=${requestToken}`);
        res.statusCode = 302;
        res.end();
      })
      .catch((error: { message: any; }) => {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error"});
      });
  } catch (error) {
    console.error('Error making request:', error);
    res.status(500).json({ error: "Internal Server Error"});
  }
}
```

A new endpoint is now available at [http://localhost:3000/api/make_request](http://localhost:3000/api/make_request).

## Client-Side

Your client now has to call the `make_request` endpoint to redirect to Embloy's application portal:

```JavaScript title="app/page.tsx"
<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    <Link href="/api/make_request" className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className={`mb-3 text-4xl font-semibold`}>
        Apply with EMBLOY{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
        </span>
        </h2>
        <p className={`m-0 max-w-[60ch] text-sm opacity-50`}>
        Click to apply for the job with EMBLOY.
        </p>
    </Link>
</div>
```

When pressing on "Apply with EMBLOY", a user is now redirected to Embloy's application portal.
