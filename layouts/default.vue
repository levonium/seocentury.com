<template>
  <div class="main">
    <nuxt />
    <app-footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'

export default {
  components: {
    'app-footer': Footer
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color--text);
  background-color: var(--color--bg);
  font-size: 18px;
  font-weight: 300;
}
* {
  box-sizing: inherit;
}
.sr-text {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
img {
  max-width: 100%;
}
a, a:visited {
  color: var(--color--text);
  /* text-decoration-skip-ink: none; */
}
.main {
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 4em;
  grid-gap: 2em;
}
h1, h2, h3, h4 {
  line-height: 1.2em;
}
p {
  margin-top: 0;
}
.page {
  align-self: center;
  padding: 3em;
  font-size: 1.1em;
  line-height: 1.2em;
}
.container {
  padding: 3em;
}
@media screen and (max-width: 768px) {
  #app {
    grid-template-rows: 1fr 5em;
  }
  .page,
  .container {
    padding: .5em;
  }
}
.page-grid {
  display: grid;
  grid-template-columns: 200px auto;
  grid-gap: 1em;
  margin: 2em 1em;
}
@media screen and (max-width: 960px) {
  .page-grid {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
}
.button {
  display: inline-block;
  padding: .5em 1em .3em;
  color: var(--color--text);
  background-color: var(--color--bg);
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  border: 1px solid var(--color--text);
  box-shadow: 5px 5px 0px var(--color--text);
  cursor: pointer;
  transition: all .8s;
}
.button:hover {
  box-shadow: 5px 5px 0px var(--color--bg);
  color: var(--color--bg);
  background-color: var(--color--text);
}

</style>
