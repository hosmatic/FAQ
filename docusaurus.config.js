module.exports = {
  title: 'PuhHosting FAQ',
  tagline: 'Der Ort für deine Antworten',
  url: 'https://faq.puh.hosting',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://cdn.puh.hosting/puhhosting/favicon/favicon-16x16.png',
  organizationName: 'PuhHosting',
  projectName: 'FAQ',
  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        id: 'sitemap',
        changefreq: 'weekly',
        priority: 0.5,
        trailingSlash: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/puhhosting.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: 'docs',
        /**
         * Base url to edit your site.
         * Docusaurus will compute the final editUrl with "editUrl + relativeDocPath"
         */
        editUrl: ({locale, versionDocsDirPath, docPath}) => {
          if (locale !== 'en') {
            return `https://crowdin.com/project/docusaurus-v2/${locale}`;
          }
          return `https://github.com/PuhHosting/FAQ/edit/master/${versionDocsDirPath}/${docPath}`;
        },
        /**
         * Useful if you don't want users to submit doc pull-requests to older versions.
         * When docs are versioned, the edit url will link to the doc
         * in current version, instead of the versioned doc.
         * Note: this option is ignored when editUrl is a function
         */
        editCurrentVersion: true,
        /**
         * URL route for the docs section of your site.
         * *DO NOT* include a trailing slash.
         * INFO: It is possible to set just `/` for shipping docs without base path.
         */
        routeBasePath: 'docs',
        include: ['**/*.md'], // Extensions to include.
        /**
         * Path to sidebar configuration for showing a list of markdown pages.
         * Warning: will change
         */
        sidebarPath: './sidebar.js',
        /**
         * Theme components used by the docs pages
         */
        docLayoutComponent: '@theme/DocPage',
        docItemComponent: '@theme/DocItem',
        /**
         * Whether to display the author who last updated the doc.
         */
        showLastUpdateAuthor: true,
        /**
         * Whether to display the last date the doc was updated.
         */
        showLastUpdateTime: true,
      },
    ],
  ],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'UA-159552747-6',
      anonymizeIP: true,
    },
    gtag: {
      trackingID: 'UA-159552747-6',
      anonymizeIP: true,
    },
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
      copyright: `Copyright © ${new Date().getFullYear()} PuhHosting, made with ❤ and build with Docusaurus.`,
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
