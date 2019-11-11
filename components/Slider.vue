<template>
  <section class="slider-wrapper">
    <div class="slider">
      <div class="slide slide-about" :class="{ active: currentSlide === 'about' }">
        <div class="slide-content">
          <h2 class="slide-title">
            SEO Century
          </h2>
          <p class="slide-desc">
            The right place to create and promote your website.
          </p>
          <a href="#" class="button slide-button" @click.prevent="openPopup('about')">Learn more</a>
          <router-link class="button slide-button for-small" to="/contacts" exact>
            Get in touch
          </router-link>
        </div>
        <img src="~/static/img/seocentury.jpg" alt="seo-century">
      </div>
      <div class="slide slide-seo" :class="{ active: currentSlide === 'seo' }">
        <div class="slide-content">
          <h2 class="slide-title">
            SEO Services
          </h2>
          <p class="slide-desc">
            Get high rankings and more traffic, improve visibility.
          </p>
          <a href="#" class="button slide-button" @click.prevent="openPopup('seo')">Learn more</a>
          <router-link class="button slide-button for-small" to="/seo" exact>
            Learn more
          </router-link>
        </div>
        <img src="~/static/img/seo.jpg" alt="seo-services">
      </div>
      <div class="slide slide-web" :class="{ active: currentSlide === 'web' }">
        <div class="slide-content">
          <h2 class="slide-title">
            Web Design
          </h2>
          <p class="slide-desc">
            Complete services of website design and development.
          </p>
          <a href="#" class="button slide-button" @click.prevent="openPopup('web')">Learn more</a>
          <router-link class="button slide-button for-small" to="/web-design" exact>
            Learn more
          </router-link>
        </div>
        <img src="~/static/img/web.jpg" alt="web-development">
      </div>
    </div>

    <div class="slider-controls">
      <span :class="{ current: currentSlide === 'about' }" @click="slide('about')">about</span>
      <span :class="{ current: currentSlide === 'seo' }" @click="slide('seo')">seo</span>
      <span :class="{ current: currentSlide === 'web' }" @click="slide('web')">web</span>
    </div>

    <div class="page-content">
      <div class="content about" :class="{ open: currentPopup === 'about' }">
        <span class="close" @click="closePopup">x</span>
        <p>
          Here you will get professional SEO services and the desired results within the shortest possible time period. The main goal for SEO Century is to meet to exceed customer expectations.
        </p>
        <p>
          <strong>With SEO Century your success is guaranteed</strong>
        </p>
        <p>
          SEO Century offers you a flexible pricing system. Each of our packages is customized per our client’s needs and budget. After analyzing your website and learning your objectives, we will be able to tell you the cost and duration of the project. At the end you get what you need!
        </p>
        <router-link class="button learn-more" to="/contacts" exact>
          Get in touch
        </router-link>
      </div>
      <div class="content seo" :class="{ open: currentPopup === 'seo' }">
        <span class="close" @click="closePopup">x</span>
        <p>
          <strong>SEO Century will make your website the best salesperson of your company</strong>
        </p>
        <p>
          SEO Century’s SEO campaigns are customized per customer needs and help our customers get high rankings in search engine result pages (SERP) and more organic (unpaid) traffic, improve their website visibility and brand authority.
        </p>
        <router-link class="button learn-more" to="/seo" exact>
          SEO Services
        </router-link>
      </div>
      <div class="content web" :class="{ open: currentPopup === 'web' }">
        <span class="close" @click="closePopup">x</span>
        <p>
          <strong>Create your website with SEO Century</strong>
        </p>
        <p>
          We offer you complete services of website building, development and promotion starting from domain name and web hosting to optimization and marketing. Start your business with a solid background: your awesome website meeting the search engines requirements.
        </p>
        <router-link class="button learn-more" to="/web-design" exact>
          Web Design
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      currentSlide: 'about',
      currentPopup: ''
    }
  },
  methods: {
    slide (value) {
      this.currentSlide = value
    },
    openPopup (value) {
      this.currentPopup = value
    },
    closePopup () {
      this.currentPopup = ''
    }
  }
}
</script>

<style scoped>
.slider-wrapper {
  position: relative;
  padding: 2em 4em 2em 2em;
  overflow: hidden;
}
.slider {
  display: flex;
}
.slide {
  flex-basis: 0;
  flex-shrink: 0;
  flex-grow: 0;
  opacity: 0;
  transition: opacity 1.2s;
}
.slide.active {
  flex-grow: 10;
  opacity: 1;
}
.slide-content {
  position: absolute;
  left: -400px;
  top: 1em;
  width: 20%;
  height: 100%;
  transition: all 1.2s;
}
.active .slide-content {
    left: 0;
}
.slide-title {
  font-size: 3em;
  font-weight: 700;
}
.slide-desc {
  width: 150%;
  font-size: 1.4em;
  line-height: 1.4em;
}
.slide-button {
  margin: .5em 0;
  padding: .5em 1em .3em;
}
.slide img {
  display: block;
  width: 80%;
  margin-left: 20%;
}

.slider-controls {
  position: absolute;
  right: 0;
  bottom: 2em;
}
.slider-controls span {
  display: block;
  position: relative;
  height: 1.5em;
  cursor: pointer;
}
.slider-controls span:before {
  content: '';
  display: block;
  position: absolute;
  left: -1.5em;
  top: .75em;
  height: 1px;
  width: 1em;
  background: var(--color--text);
  transition: all 1.2s;
}
.slider-controls span.current:before {
  left: -3.5em;
  width: 3em;
}

.content {
  position: absolute;
  top: 100%;
  left: 20%;
  height: 100%;
  padding: 3em;
  border: 1px solid var(--color--text);
  background: var(--color--bg);
  font-size: 1.2em;
  line-height: 1.5em;
  transition: top 1.2s;
}
.content.open {
  top: 0;
}
.close {
  position: absolute;
  top: 1em;
  right: 1em;
  font-size: 2em;
  font-weight: 300;
  cursor: pointer;
}
.learn-more {
  position: absolute;
  bottom: 2em;
  right: 2em;
}
.for-small {
  display: none;
}

@media screen and (max-width: 1024px) {
  .slider-wrapper {
    max-width: 80%;
    margin: 0 auto;
  }
  .slide-desc,
  .button.slide-button {
    display: none;
  }
  .slide-button.for-small {
    display: inline-block;
  }
}
@media screen and (max-width: 768px) {
  .slider-wrapper {
    max-width: 100%;
    padding: 1em;
  }
  .slider {
    flex-direction: column;
  }
  .slide {
    flex-grow: 10;
    opacity: 1;
    position: relative;
  }
  .slide-content {
    left: 0;
    width: 60%;
  }
  .slide-title {
    font-size: 1.2em;
    margin-bottom: 0;
  }
  .slider-controls {
    display: none;
  }
}
</style>
