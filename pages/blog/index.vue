<template>
  <div class="page page-seo">
    <div class="container post-container">
      <h1>
        SEO CENTURY BLOG
      </h1>
      <p>
        SEO & Social Media | TECH
      </p>

      <h2>Posts</h2>
      <ul class="posts-list">
        <li v-for="(post, index) in posts" :key="index">
          <router-link :to="post.slug" v-html="post.title" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import postsList from '~/static/posts/_posts.json'

export default {
  head () {
    return {
      title: 'SEO, Social Media & Tech Blog |> SEO Century'
    }
  },
  data () {
    return {
      posts: null
    }
  },
  created () {
    this.posts = postsList
  }
}
</script>

<style scoped>
.posts-list {
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
}
.posts-list li {
  margin-bottom: 1em;
}
.posts-list li a {
  color: var(--color--bg);
  background: var(--gradient);
  font-size: 1.6em;
  line-height: 1.5;
  font-weight: 700;
  display: block;
  padding: 1em;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
@media screen and (min-width: 768px) {
  .posts-list li a {
    font-size: 2em;
  }
}
</style>
