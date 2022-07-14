import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Blog</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        I blog about web development and (occasionally) silly things I see in Korea as an expat.
      </>
    ),
  },
  {
    title: <>2nd Brain</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Building A Second Brain is a methodology for saving and systematically reminding us of the ideas, inspirations, insights, and connections we've gained through our experience. It expands our memory and our intellect using the modern tools of technology and networks (source: fortelabs.co).
      </>
    ),
  },
  {
    title: <>Short Intro</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        I'm Simon, a 'Hoosier' (a person from Indiana), and web developer from the US 🇺🇸. Besides learning software developement, I enjoy books, tennis, golf, basketball, podcasts, New Yorker Magazine, Pink Floyd, Led Zeppelin, Simon and Garfunkel, tacos, pizza, and burgers.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
