/* eslint-disable */

export default ({ app }) => {
  // Only run on client-side and only in production mode
  if (process.env.NODE_ENV !== 'production')
    return

  // Include Plausible Analytics Script
  ;(function (p, i, e) {
    const s = p.createElement('script')
    s.async = 1
    s.defer = 1
    s.dataset.domain = e
    s.src = i
    p.getElementsByTagName('head')[0].appendChild(s)
  })(
    document,
    'https://plausible.io/js/plausible.js',
    'seocentury.com'
  )
}
