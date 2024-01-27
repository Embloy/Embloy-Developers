import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/embloy_bike.svg').default,
    description: (
      <>
        Seamlessly integrating Embloy into your page and today's social media landscape for unparalleled engagement with job seekers in the 2020s.
      </>
    ),
  },
  {
    title: 'Streamline Hiring',
    Svg: require('@site/static/img/embloy_tree.svg').default,
    description: (
      <>
        Eliminate the need for lengthy email and phone exchanges and enjoy the convenience of a single platform, where everything is just one click away.
      </>
    ),
  },
  {
    title: 'End-to-End Recruitment Hosting',
    Svg: require('@site/static/img/embloy_train.svg').default,
    description: (
      <>
        Eliminate the need for lengthy email and phone exchanges and enjoy the convenience of a single platform, where everything is just a click away.      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
