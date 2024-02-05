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
import {useColorMode} from '@docusaurus/theme-common'; // Import the hook
import '../css/custom.css';

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
    name: 'Embloy Android SDK',
    url: '/docs/sdks/mobile_sdks/android_sdk',
    description: (
      <Translate>
        📦 ANDROID 
      </Translate>
    ),
  },
  {
    name: 'Embloy React Native SDK',
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
  return (
    <div className={clsx('col col--4 margin-bottom--lg')}>
      <Link className="button button--primary" to={url}>
        <div className="card__body">
          <h3>{name}</h3>
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
