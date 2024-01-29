// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Developers@Embloy',
  tagline: 'Solutions that brain-boost HR',
  url: 'https://embloy.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'embloy', // Usually your GitHub org/user name.
  projectName: 'embloy-developers', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          'Join the early birds & be among the first to explore our closed beta by filling out <a target="_blank" rel="noopener noreferrer" href="https://embloy-platforms.involve.me/beta">this form</a>.',
        backgroundColor: '#99FFFF',
        textColor: '#191920',
        isCloseable: true,
      },
      navbar: {
        logo: {
          alt: 'Embloy Logo',
          src: 'img/developers_logo_on_light.svg',
          srcDark: 'img/developers_logo_on_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/embloy/embloy-examples#embloy-examples', 
              label: 'Examples', 
              position: 'left'
          },
          {
          href: 'https://documenter.getpostman.com/view/24977803/2s9YRB2rkE', 
            label: 'API', 
            position: 'left'
          },
          //{
          //  type: 'docsVersionDropdown',
          //},  
          {
            href: 'https://github.com/embloy',
            label: 'GitHub',
            icon: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Embloy Logo',
          src: 'img/logo-3.png',
          href: 'https://github.com/embloy',
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Core',
                to: '/docs/category/core',
              },
              {
                label: 'Genius',
                to: '/docs/category/genius',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Postman',
                href: 'https://postman.com/embloy',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/embloy',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/embloy',
              },
              {
                label: 'About',
                href: 'https://about.embloy.com',
              },
              {
                label: 'Postman API collection',
                href: 'https://documenter.getpostman.com/view/24977803/2s9YRB2rkE',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} • Embloy Platforms GbR.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['ruby', 'bash', 'python', 'java', 'json'],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },  
      algolia: {
        // The application ID provided by Algolia
        appId: 'PZJFX96675',
        // Public API key: it is safe to commit it
        apiKey: '7be5a71c147a2f07dfe9f5f06d2470bf',
        indexName: 'developers-embloy',
      },
    }
  ),
  scripts: [
    {
      src:
        'https://fonts.googleapis.com/css2?family=lexend&display=swap',
      async: true,
    },
  ],  
};

module.exports = config;