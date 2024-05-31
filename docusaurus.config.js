// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

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
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },*/
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
          '<a target="_blank" rel="noopener noreferrer" href="https://about.embloy.com/en/contact/">Please provide feedback on this developer documentation - especially if you find anything unclear, missing, or incorrect. We really do appreciate it!</a>',
        backgroundColor: '#99FFFF',
        textColor: '#191920',
        isCloseable: true,
      },
      navbar: {
        logo: {
          alt: 'Embloy Logo',
          src: 'img/branding/developers_logo_on_light.svg',
          srcDark: 'img/branding/developers_logo_on_dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/embloy/embloy-examples#embloy-examples',
            label: 'Examples',
            position: 'left'
          },
          {
            href: 'https://docs.embloy.com',
            label: 'API Docs',
            position: 'left'
          },
          {
            href: 'https://status.embloy.com',
            label: 'System Status',
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
          src: 'img/branding/opensource-banner.png',
          href: 'https://github.com/embloy',
        },
        links: [
          {
            title: 'Learn Embloy',
            items: [
              {
                label: 'Quickstart',
                to: '/docs/intro',
              },
              {
                label: 'Tutorials',
                to: '/docs/category/tutorial---basics',
              },
              {
                label: 'Guides',
                to: '/docs/category/guides',
              },
              {
                label: 'SDKs',
                to: '/docs/category/sdks',
              },
            ],
          },
          {
            title: 'Most Viewed Docs',
            items: [
              {
                label: 'Integrate Quicklink',
                to: '/docs/category/quicklink',
              },
              {
                label: 'Use Genius-Queries',
                to: '/docs/core/genius_queries',
              },
              {
                label: 'Create Jobs',
                to: '/docs/category/jobs',
              },
              {
                label: 'Receive Applications',
                to: '/docs/category/applications',
              },
            ],
          },
          {
            title: 'API References & Status',
            items: [
              {
                label: 'API documentation',
                href: 'https://docs.embloy.com',
              },
              {
                label: 'Postman workspace',
                href: 'https://www.postman.com/embloy/workspace/embloy-workspace/collection/24977803-e44099dd-6647-4b78-bd7a-03293e47dee5',
              },
              {
                label: 'System status',
                href: 'https://status.embloy.com',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/embloy',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/embloy',
              },
              {
                label: 'Postman Team',
                href: 'https://postman.com/embloy',
              },
              {
                label: 'Code of Coduct',
                href: 'https://github.com/embloy/.github/blob/main/code-of-conduct.md',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About',
                href: 'https://about.embloy.com',
              },
              {
                label: 'Privacy',
                href: 'https://embloy.com/resources/privacy',
              },
              {
                label: 'Terms',
                href: 'https://embloy.com/resources/terms',
              },
              {
                label: 'Blog',
                href: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} • Embloy Platforms GbR.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['ruby', 'bash', 'python', 'java', 'json', 'php'],
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