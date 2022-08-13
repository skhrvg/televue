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
    siteTitle: 'TeleVue',
    logo: '/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/skhrvg/televue' },
    ],
    editLink: {
      pattern: 'https://github.com/skhrvg/televue/edit/main/docs/:path',
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
          { text: 'Passport Button [WIP]', link: '/widgets/passport' },
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
    // @ts-expect-error legit vite plugin
    plugins: [mkcert()],
    server: {
      port: 443,
      host: '127.0.0.1',
      https: true,
    },
  },
})
