import { defineConfig } from 'vitepress'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  title: 'TeleVue',
  description: 'Telegram widgets and Bot web app utilities for Vue 3',
  lang: 'en-US',
  lastUpdated: true,
  appearance: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
  ],

  themeConfig: {
    algolia: {
      appId: 'KOUOXFHX8V',
      apiKey: 'c72d4741d3cdb9b9510bdbe1e2c5151c',
      indexName: 'televue',
    },
    siteTitle: 'TeleVue',
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/skhrvg/televue' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>npm</title><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"/></svg>',
        },
        link: 'https://npmjs.com/package/televue',
      },
    ],
    editLink: {
      pattern: 'https://github.com/skhrvg/televue/edit/master/docs/:path',
      text: 'Edit this page on GitHub',
    },
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Installation', link: '/installation' },
        ],
      },
      {
        text: 'Widgets',
        collapsible: true,
        items: [
          { text: 'Login Button', link: '/widgets/login' },
          { text: 'Sharing Button', link: '/widgets/share' },
          { text: 'Custom Sharing Button', link: '/widgets/custom-share' },
          { text: 'Post Widget', link: '/widgets/post' },
          { text: 'Discussion Widget', link: '/widgets/discussion' },
          { text: 'Passport Button', link: '/widgets/passport' },
          { text: 'Telegram Documentation', link: 'https://core.telegram.org/widgets' },
        ],
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Gleb Sakharov',
    },
  },

  vite: {
    plugins: [mkcert()],
    server: {
      port: 443,
      host: '127.0.0.1',
      https: true,
    },
  },
})
