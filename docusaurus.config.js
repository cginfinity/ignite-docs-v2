module.exports = {
  title: 'Ignite Docs',
  tagline: 'Low-Code Programming with CG Ignite',
  url: 'https://Cybergroup-Research.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/cg-ignite-orange.png',
  organizationName: 'Cybergroup-Research', // Usually your GitHub org/user name.
  projectName: 'ignite-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/cg-ignite-icon-orange.png',
      },
      items: [
        {
          to: 'docs/http-endpoints/create-endpoint',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blogs',
          position: 'left'},
        {
          href: 'https://cgignite.com',
          label: 'CG-Ignite',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //       {
      //         label: 'Second Doc',
      //         to: 'docs/doc2/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
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
          editUrl:
            'https://github.com/Cybergroup-Research/ignite-docs-v2/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Cybergroup-Research/ignite-docs-v2/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
