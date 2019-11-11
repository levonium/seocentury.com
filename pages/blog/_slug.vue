<template>
  <div class="container post-container mx-auto">
    <!-- // eslint-disable-next-line -->
    <article v-html="markdownContent" />

    <aside class="sidebar">
      <h4>WordPress Themes &amp; Plugins</h4>
      <img src="~/static/img/dinomatic-banner.png" alt="dinomatic">
    </aside>
  </div>
</template>

<script>
// import marked from 'marked'
export default {
  head () {
    return {
      title: this.title
    }
  },
  data () {
    return {
      slug: this.$route.params.slug,
      markdownContent: null
    }
  },
  async asyncData ({ route }) {
    const post = await import(`~/contents/${route.params.slug}.md`)
    return { markdownContent: post.html }
  },
  created () {
    this.title = `${this.slugToTitle(this.slug)} |> SEO Century Blog`
  },
  methods: {
    slugToTitle (str) {
      const capitalized = str.replace(/(?:^|\s)\S/g, function (a) { return a.toUpperCase() })
      return capitalized.split('-').join(' ')
    }
  }
}
</script>

<style>
.post-container {
  max-width: 960px;
  margin: 0 auto;
}
.post-container h1 {
  font-size: 2em;
  line-height: 1.5;
}
.post-container p {
  font-size: 1.2em;
  line-height: 1.8;
  margin-bottom: 1em;
}
.post-container p:first-of-type {
  font-size: 1em;
  font-weight: 700;
  margin-bottom: 2em;
  border-bottom: 1px solid var(--color--text);
  display: inline-block;
}
.sidebar {
  max-width: 360px;
  margin: 2em auto 0;
  padding: 0 0 1em;
  text-align: center;
  border-top: 1px solid var(--color--text);
  border-bottom: 1px solid var(--color--text);
}
</style>
