/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import '../css/custom.css';

const WebSDKs = [
  {
    name: 'React Embloy.js',
    url: '/',
    description: (
      <Translate>
        📦 REACT NATIVE
      </Translate>
    ),
  },
  {
    name: 'ES Module Embloy.js',
    url: '/',
    description: (
      <Translate>
        📦 HTML · JavaScript 
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
      <Link className="button button--primary disabled" to={url}>
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
