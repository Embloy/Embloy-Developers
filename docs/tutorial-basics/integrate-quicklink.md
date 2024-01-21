---
sidebar_position: 4
---

# Integrate Quicklink

In this example, we've already integrated [Embloy's Node.js SDK](https://www.npmjs.com/package/embloy). All you need to do is provide your client token in the input field.

Here's a brief explanation of how the pre-integrated code in this example works:

## Server-Side

:::warning
In a production setting, you would typically create a `pages/api/example.ts` file to serve as your backend to prevent accidental exposure of your `client_token`. This file would include an example endpoint that calls the Embloy Node SDK. However, in this example, we're making the request from the client-side for simplicity:
:::

```TypeScript title="app/page.tsx"
import { EmbloyClient, EmbloySession } from 'embloy';

// ... other code

  const handleApplyClick = async () => {
    setIsLoading(true);
    let url = '';
    try {
      const embloy = new EmbloyClient(clientToken, new EmbloySession("job", "your-job-slug")); // Add other optional fields if neccessary
      url = await embloy.makeRequest();
    } catch (error) {
      console.error('Error making request:', error);
    } finally {
      setIsLoading(false);
      if (url) {
        window.location.href = url;
      } else {
        console.error('URL is not available');
      }
    }
  };

// ... other code

```

## Client-Side

Your client needs to call the method (or endpoint, if you've implemented it in your backend) to redirect to Embloy's application portal:

```TypeScript title="app/page.tsx"
<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
  <button
    onClick={handleApplyClick} // If you set up an endpoint in your backend, you'd have to implement the according `const handleApplyClick = async () => {` function to call your endpoint
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

