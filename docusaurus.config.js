/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ignite',
  tagline: 'Connect systems by building automated flows using drag and drop!',
  url: 'https://docs.cgignite.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Cyber Group Ignite', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    respectPrefersColorScheme: true,
    navbar: {
      // title: 'My Site',
      logo: {
        alt: 'ignite',
        src: 'img/ignite-full-orange.png',
        srcDark: 'img/ignite-full-white.png', 
      },
      hideOnScroll: true,
      items: [
        {
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'Getting Started',
              href: '/docs/getting-started/introduction/',
            },
            {
              label: 'Ignite Ecosystem',
              href: '/docs/ignite-ecosystem/runtime/runtime-introduction/',
            },
            {
              label: 'Developer Guide',
              href: '/docs/developer-guide/basics/messages/set-message-property-fixed/',
            },
            {
              label: 'Ignite Connectors',
              href: '/docs/connectors/google-sheets/setup-google-service/',
            },
            {
              label: 'Devops Practices',
              href: '/docs/devops-practices/release-management/upload-download-release-packages',
            }
          ],
        },
        {
          to: 'blog',
          label: 'Blogs',
          position: 'left'
        }
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Ignite',
          items: [
            {
              label: 'Docs',
              to: '/docs/',
            },
            {
              label: 'Blogs',
              to: '/blog/',
            },
            {
              label: 'Deploy',
              href: 'https://github.com/Cybergroup-Research/ignite-runtime-image',
            }
          ],
        },
        {
          title: 'Apps',
          items: [
            {
              label: 'Dashboard',
              href: 'https://dashboard.cgignite.io/apps',
            },
            {
              label: 'API Designer',
              href: 'https://designer.cgignite.io/',
            },
            {
              label: 'JSONata Explorer',
              href: 'https://jsonata.cgignite.io/',
            },
          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'CG Ignite',
              href: 'https://www.cgignite.com/',
            },
            {
              label: 'Cyber Group',
              href: 'https://www.cygrp.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cyber Group Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
