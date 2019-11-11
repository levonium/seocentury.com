export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:300,400' }
    ]
  },

  loading: { color: '#fff' },
  css: [],
  plugins: [
    '~/plugins/vue-resource',
    '~/plugins/vue-clipboards',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
    // '@nuxtjs/tailwindcss'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  build: {
    extend (config, ctx) {
    }
  }
}
