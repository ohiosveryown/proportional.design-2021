
export default {
  mode: 'spa',

  // headers
  head: {
    title: 'Proportional Design'
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', 'Proportional.design is a web presence for a studio building wood furniture and functional objects.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // loader
  loading: false,

  // global styles
  css: [
    '~/static/style/reset.scss',
    '~/static/style/type.scss',
    '~/static/style/util.scss',
  ],

  // nuxt modules
  modules: [
    '@nuxtjs/pwa',
  ],

  // build config
  build: {
    extend (config, ctx) {
    }
  }
}
