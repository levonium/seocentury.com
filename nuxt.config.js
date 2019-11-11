import Mode from 'frontmatter-markdown-loader/mode'

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
    '~/plugins/vue-clipboards',
    { src: '~plugins/ga.js', mode: 'client' }
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/pwa'
  ],
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [Mode.HTML]
        }
      })
    }
  },

  generate: {
    routes: [
      // 💩💩💩 who cares! this is never going to be changed/updated.
      '/blog/tweets-are-now-included-in-google-desktop-search-results',
      '/blog/meet-alphabet-and-sundar-pichai-as-googles-new-ceo',
      '/blog/google-is-rolling-out-a-new-interface-for-hotel-finder',
      '/blog/linkedin-crosses-1-million-publishers-on-its-blogging-platform',
      '/blog/pinterest-rolls-out-buyable-pins-for-iphone-and-ipad',
      '/blog/why-you-need-visual-content-marketing',
      '/blog/rel-alternate-hreflang-annotations-common-issues-to-pay-attention-to',
      '/blog/6-essential-tips-for-creating-awesome-social-media-marketing-plan',
      '/blog/new-blocked-resources-report-in-google-webmaster-tools',
      '/blog/smart-tips-to-manage-your-linkedin-activities',
      '/blog/social-media-marketing-automation-good-or-bad',
      '/blog/tips-for-local-seo-in-2015',
      '/blog/top-5-seo-tips-every-webmaster-should-follow',
      '/blog/how-to-engage-your-customers',
      '/blog/twitter-to-show-tweets-in-google-search-results',
      '/blog/how-to-make-a-great-presentation',
      '/blog/bings-top-searches-in-2014-kim-kardashian-the-most-searched-celebrity',
      '/blog/google-launches-mobile-friendly-test-tool',
      '/blog/halloween-2014-google-doodle-logos',
      '/blog/google-releases-penguin-3-0-update',
      '/blog/5-tips-to-follow-in-your-social-media-marketing',
      '/blog/3-content-types-that-people-would-love-to-read',
      '/blog/twitter-adds-buy-buttons-to-tweets-for-e-commerce',
      '/blog/google-tests-drone-deliveries-in-project-wing-trials',
      '/blog/seo-is-a-never-ending-marathon-how-to-keep-running',
      '/blog/twitter-timelines-changes',
      '/blog/share-link-generator',
      '/blog/https-as-a-ranking-signal-google-to-priotize-secure-sites',
      '/blog/new-translation-feature-in-google-search-results',
      '/blog/googles-panda-4-0-forces-pr-newswire-to-take-action-against-spammers',
      '/blog/youtube-mix-for-artists-on-the-sidebar-is-it-new',
      '/blog/googles-matt-cutts-on-how-to-tell-if-site-is-affected-by-algorithm',
      '/blog/is-this-an-addition-to-google-search-results',
      '/blog/no-pagerank-update-until-2014',
      '/blog/blackberry-is-acquired-by-fairfax-financial',
      '/blog/video-on-instagram',
      '/blog/google-penguin-2-0',
      '/blog/theshortcutts',
      '/blog/google-webmasters-help-for-hacked-sites',
      '/blog/alicia-keys-blackberry-creative-director',
      '/blog/pinterest-testing-a-new-look',
      '/blog/google-faster-image-search',
      '/blog/lg-84lm9600-84-inch-the-largest-lcd-released-so',
      '/blog/keep-calm-and-have-a-cup-of-tea',
      '/blog/new-google-analytics-design',
      '/blog/semrush-position-tracking-tool',
      '/blog/google-most-shared-social-video-brand',
      '/blog/facebook-messages',
      '/blog/internet-advertising-revenue-report',
      '/blog/google-safe-search-image-search',
      '/blog/best-places-to-work-2013-glassdoor',
      '/blog/google-is-bing-is',
      '/blog/single-column-facebook-timeline',
      '/blog/best-global-brands-2012',
      '/blog/missing-children-404-notfound',
      '/blog/emoticons-30-anniversary',
      '/blog/working-solutions',
      '/blog/yandex-maps-into-apple',
      '/blog/iphone-vs-galaxy',
      '/blog/facebook-mobile',
      '/blog/microsoft-new-logo',
      '/blog/google-voice-search',
      '/blog/pinterest-open-registration',
      '/blog/google-free-iphone',
      '/blog/facebook-fake-accounts',
      '/blog/fastcompany-the-search-giant-is-known-for-its',
      '/blog/outlook-com',
      '/blog/social-login-trends',
      '/blog/26-biggest-social-networks',
      '/blog/google-calculator',
      '/blog/google-nexus-7-tablet',
      '/blog/seo-profit',
      '/blog/seo-century'
    ]
  }
}
