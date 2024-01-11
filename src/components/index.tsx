/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {useColorMode} from '@docusaurus/theme-common'; // Import the hook

const WebSDKs = [
  {
    name: 'React Embloy.js',
    url: '/docs/sdks/web_sdks/react',
    description: (
      <Translate>
        📦 REACT NATIVE
      </Translate>
    ),
  },
  {
    name: 'ES Module Embloy.js',
    url: '/docs/sdks/web_sdks/es_module',
    description: (
      <Translate>
        📦 HTML · JavaScript 
      </Translate>
    ),
  },
];

const MobileSDKs = [
  {
    name: 'Embloy iOS SDK',
    url: '/docs/sdks/mobile_sdks/ios_sdk',
    description: (
      <Translate>
        📦 IOS
      </Translate>
    ),
  },
  {
    name: 'Stripe Android SDK',
    url: '/docs/sdks/mobile_sdks/android_sdk',
    description: (
      <Translate>
        📦 ANDROID 
      </Translate>
    ),
  },
  {
    name: 'Stripe React Native SDK',
    url: '/docs/sdks/mobile_sdks/react_native_sdk',
    description: (
      <Translate>
        📦 REACT NATIVE
      </Translate>
    ),
  },
];

interface Props {
  name: string;
  url: string;
  description: JSX.Element;
}

function SDKCard({name, url, description}: Props) {
  const { colorMode } = useColorMode(); // Get the current color mode

  const cardClass = colorMode === 'dark' ? 'card-dark' : 'card-light'; // Determine the card class based on the color mode

  return (
    <div className={clsx('col col--4 margin-bottom--lg', cardClass)}> {/* Apply a class based on the color mode */}
      <Link className="button button--secondary" to={url}>
        <div className="card__body">
          <Heading as="h3">{name}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export function WebSDKRow(): JSX.Element {
  return (
    <div className="row">
      {WebSDKs.map((sdk) => (
        <SDKCard key={sdk.name} {...sdk} />
      ))}
    </div>
  );
}

export function MobileSDKRow(): JSX.Element {
  return (
    <div className="row">
      {MobileSDKs.map((sdk) => (
        <SDKCard key={sdk.name} {...sdk} />
      ))}
    </div>
  );
}
