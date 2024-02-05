---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Android SDK

Integrate Embloy's prebuilt application UI into the application process of your Android app with the `ApplicationSheet` class.

:::info
The Embloy Android SDK is currently under development and not released yet. However, the documentation is already set up, so that you can get a glimpse of what's coming.
:::

## Set up Embloy

First, you need an Embloy account. [Register now](https://embloy.com/register).

### Server-side

This integration requires endpoints on your server that talk to the Embloy API. Use our official libraries for access to the Embloy API from your server. See also the [Server-side SDKs](/docs/sdks/overview.mdx#server-side-sdks).

### Client-side

The [Embloy Android SDK](https://github.com/embloy/embloy-android) is open source and fully documented.

To install the SDK, add `embloy-android` to the `dependencies` block of your `app/build.gradle` file:

<Tabs
  defaultValue="groovy"
  values={[
    {label: 'Groovy', value: 'groovy'},
    {label: 'Kotlin', value: 'kotlin'},
  ]}>

<TabItem value="groovy">

```Java title="build.gradle"
apply plugin: "com.android.application"

android { ... }

dependencies {
// ...

// Embloy Android SDK
implementation "com.embloy:embloy-android:0.1.0"
}
```

</TabItem>

<TabItem value="kotlin">

```Java title="build.gradle.kts"
plugins {
    id("com.android.application")
}

android { ... }

dependencies {
  // ...

  // Embloy Android SDK
  implementation("com.embloy:embloy-android:0.1.0")
}
```

</TabItem>

</Tabs>

:::note
For details on the latest SDK release and past versions, see the [Releases](https://github.com/embloy/embloy-ios/releases) page on GitHub. To receive notifications when a new release is published, [watch releases for the repository](https://help.github.com/en/articles/watching-and-unwatching-releases-for-a-repository#watching-releases-for-a-repository).
:::
