module.exports = {
  title: 'PuhHosting FAQ',
  tagline: 'Der Ort für deine Antworten',
  url: 'https://puhhosting.github.io/FAQ',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.puh.hosting/puhhosting/favicon/favicon-16x16.png',
  organizationName: 'PuhHosting', // Usually your GitHub org/user name.
  projectName: 'FAQ', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PuhHosting FAQ',
      logo: {
        alt: 'PuhHosting Logo',
        src: 'https://cdn.puh.hosting/puhhosting/Logo/App.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'FAQ',
          position: 'left',
        },
        {
          href: 'https://www.puh.hosting',
          label: 'Website',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Socialmedia',
          items: [
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/puh_hosting/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/w8Syn43',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/PuhHosting',
            },
          ],
        },
        {
          title: 'Rechliches',
          items: [
            {
              label: 'Impressum',
              href: 'https://www.puh.hosting/imprint',
            },
            {
              label: 'Datenschutz',
              href: 'https://www.puh.hosting/privacy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PuhHosting, made with ❤.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
