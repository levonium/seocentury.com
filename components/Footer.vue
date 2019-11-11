<template>
  <footer class="footer">
    <span class="links">
      <router-link to="/" exact class="home-link">
        <span class="sr-text">Home</span>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M23.82,12.264L12.575,0.636C12.416,0.473,12.208,0.391,12,0.391s-0.416,0.082-0.575,0.246l-2.312,2.39V1.282h-3.72v5.591  l-5.214,5.391c-0.316,0.328-0.203,0.596,0.251,0.596h3.308v9.096c0,0.91,0.744,1.654,1.654,1.654h5.374v-6.615h2.481v6.615h5.375  c0.909,0,1.654-0.744,1.654-1.654V12.86h3.291C24.024,12.86,24.137,12.592,23.82,12.264z M18.624,11.206v10.75h-3.723V15.34H9.113  v6.616h-3.72v-10.75H3.505l3.542-3.664V2.471h0.412v4.645L12,2.42l8.495,8.786H18.624z"
          />
        </svg>
      </router-link>&middot;
      <router-link to="/blog/">Blog</router-link> &middot;
      <router-link to="/share-link-generator" exact>Share Link Generator</router-link>&middot;
      <router-link to="/contacts" exact>Contacts</router-link>
      <mode-switch />
    </span>
    <span class="copyright">&copy; 2013 - {{ (new Date()).getFullYear() }}. SEO Century</span>
  </footer>
</template>

<script>
import ModeSwitch from './ModeSwitch'
export default {
  name: 'Footer',
  components: {
    'mode-switch': ModeSwitch
  }
}
</script>

<style scoped>
.footer {
  text-align: center;
}
.footer a,
.footer a:visited {
  color: var(--color--text);
  text-decoration: none;
}
.links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5em;
}
.links > a,
.links > span {
  margin: 0 0.25em;
}
.links svg {
  display: inline-block;
  width: 0.8em;
  height: 0.8em;
  vertical-align: 0;
}
</style>
