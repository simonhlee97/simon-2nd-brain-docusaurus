module.exports = {
  title: 'SimonPost.com',
  tagline: 'Simon\'s Blog and 2nd Brain',
  url: 'https://simonpost.com/',
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
        alt: 'Simonpost.com',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/intro',
          activeBasePath: 'docs',
          label: '2nd Brain',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
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
              label: 'My (other) home page',
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
      copyright: `SimonPost.com. <a href="https://gist.github.com/simonhlee97/683b00c355226abf9d6be80076a05c7d" target="_blank">Psymin-Rhee-License</a> ${new Date().getFullYear() }. Built with Docusaurus.`,
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
