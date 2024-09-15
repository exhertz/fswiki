import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export const shared = defineConfig({
  title: 'fswiki\.ru',

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  head: [
    ['meta', { name: 'theme-color', content: '#57A72D' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'ru' }],
    ['meta', { property: 'og:title', content: 'FSWIKI: Справочник по Farming Simulator 25' }],
    ['meta', { property: 'og:site_name', content: 'fswiki.ru' }],
    ['meta', { property: 'og:url', content: 'https://fswiki.ru/' }],

    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
    ['link', { rel: 'manifest', href: '/site.webmanifest'}],
    ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5'}],
    ['meta', { name: 'msapplication-TileColor', content: '#da532c'}],
  ],

  themeConfig: {
    sidebar: generateSidebar(),
    logo: {
      light: '/icons/logo-light.png',
      dark: '/icons/logo-dark.png'
    },
    socialLinks: [
        { icon: 'github', link: 'https://github.com/exhertz' }
    ],
    editLink: {
      pattern: 'https://github.com/exhertz/fswiki/edit/dev/wiki/:path',
      text: ''
    }
  },

  srcDir: './wiki',
  srcExclude: ['**/README.md']
})