module.exports = {
  title: 'SimonPost.com',
  tagline: 'My Blog and Second Brain',
  url: 'https://simon-second-brain.vercel.app/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'simonhlee97', // Usually your GitHub org/user name.
  projectName: 'simon-2nd-brain-docusaurus', // Usually your repo name.
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        // autoCollapseCategories: true,
      }
    },
    navbar: {
      title: 'SimonPost',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: '2nd Brain',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/simonhlee97/simon-2nd-brain-docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Random Stuff I Made',
          items: [
            {
              label: 'URL Chopper',
              href: 'https://psym.link/',
            },
            {
              label: 'My home page',
              href: 'https://simonhlee97.github.io/',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/simonhlee97',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/simonhlee97',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SimonPost.com. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
