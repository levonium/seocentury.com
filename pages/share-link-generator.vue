<template>
  <div class="page page-slg">
    <div class="container">
      <h1>Share Link Generator</h1>

      <h3 class="subtitle">
        Generate custom share links for any page or file you want
      </h3>

      <div class="slg-block">
        <div class="block block-input">
          <p>
            <label for="share-url">The URL you want to share</label>
            <input id="share-url" v-model="shareUrl" type="text">
          </p>

          <p>
            <label for="share-content">Content (not for Facebook)</label>
            <textarea id="share-content" v-model="shareContent" />
          </p>

          <p>
            <label for="share-thumb">The Image URL (for Pinterest only)</label>
            <input id="share-thumb" v-model="shareThumb" type="text">
          </p>

          <p>
            <input
              type="button"
              class="button"
              value="Generate"
              :disabled="!shareUrl"
              @click="generateLinks"
            >
          </p>
        </div>

        <div class="block block-output">
          <div v-for="(network,index) in networks" :key="index" class="network" :class="index">
            <label :for="index">{{ network.name }}</label>

            <div class="actions">
              <a v-if="showTest" :href="network.url" target="_blank" title="Test the Link">
                <span class="sr-text">Test the Link</span>
                <svg viewBox="0.0 0 1792 2048">
                  <path
                    d="M1792,768c0,17.333-6.333,32.333-19,45l-512,512c-12.667,12.667-27.667,19-45,19s-32.333-6.333-45-19s-19-27.667-19-45v-256  H928c-65.333,0-123.833,2-175.5,6s-103,11.167-154,21.5s-95.333,24.5-133,42.5s-72.833,41.167-105.5,69.5  c-32.667,28.333-59.333,62-80,101s-36.833,85.167-48.5,138.5S214,1516.667,214,1584c0,36.667,1.667,77.667,5,123  c0,4,0.833,11.833,2.5,23.5s2.5,20.5,2.5,26.5c0,10-2.833,18.333-8.5,25s-13.5,10-23.5,10c-10.667,0-20-5.667-28-17  c-4.667-6-9-13.333-13-22s-8.5-18.667-13.5-30s-8.5-19.333-10.5-24C42.333,1509,0,1358.667,0,1248c0-132.667,17.667-243.667,53-333  c108-268.667,399.667-403,875-403h224V256c0-17.333,6.333-32.333,19-45s27.667-19,45-19s32.333,6.333,45,19l512,512  C1785.667,735.667,1792,750.667,1792,768z"
                  />
                </svg>
              </a>

              <span v-if="showTest" v-clipboard="network.url" class="copy" title="Copy the Link">
                <span class="sr-text">Copy the Link</span>
                <svg viewBox="0.0 0 1792.0 2048">
                  <path
                    d="M1696,512c26.667,0,49.333,9.333,68,28s28,41.333,28,68v1216c0,26.667-9.333,49.333-28,68s-41.333,28-68,28H736  c-26.667,0-49.333-9.333-68-28s-28-41.333-28-68v-288H96c-26.667,0-49.333-9.333-68-28s-28-41.333-28-68V768  c0-26.667,6.667-56,20-88s29.333-57.333,48-76l408-408c18.667-18.667,44-34.667,76-48s61.333-20,88-20h416  c26.667,0,49.333,9.333,68,28s28,41.333,28,68v328c45.333-26.667,88-40,128-40H1696z M1152,725l-299,299h299V725z M512,341L213,640  h299V341z M708,988l316-316V256H640v416c0,26.667-9.333,49.333-28,68s-41.333,28-68,28H128v640h512v-256c0-26.667,6.667-56,20-88  S689.333,1006.667,708,988z M1664,1792V640h-384v416c0,26.667-9.333,49.333-28,68s-41.333,28-68,28H768v640H1664z"
                  />
                </svg>
              </span>
            </div>

            <div class="input">
              <input
                :id="index"
                v-model="network.url"
                :placeholder="network.name + ' Sharing Link'"
                type="text"
              >
            </div>
          </div>
        </div>
      </div>

      <div class="slg-block">
        <div class="block slg-image">
          <img src="~/static/img/share-link-generator.jpg" alt="share-link-generator">
        </div>

        <div class="block slg-desc">
          <p>
            Have you thought about a tool that would generate custom share links for any page or any file?
            Create custom Facebook share links, ‘Tweet this’ links, LinkedIn share links and ‘Pin it’ links.
          </p>
          <p>
            The custom share links work everywhere (PDF files, emails, signatures etc.)
            Read our
            <a
              href="/blog/share-link-generator/"
            >blog post about this tool</a>.
          </p>
          <p>
            Need a sharing plugin for WordPress? Check out
            <small>
              <strong>
                <a href="https://drim.io/drim-share" target="_blank">DR!M Share</a>
              </strong>
            </small>.
          </p>

          <div class="slg-share-block">
            <p>
              <strong>You may want to share this</strong> 🙂
            </p>
            <p>
              <a
                class="slg-share"
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=http://www.seocentury.com/share-link-generator/"
              >
                <svg class="facebook" viewBox="0 0 30 30">
                  <g>
                    <path
                      d="M22,16l1-5l-5,0.001V7c0-1.544,0.784-2,3-2h2V0c0,0-2.05,0-4,0c-4.072,0-7,2.435-7,7v4l-5,0v5h5v14h6V16H22z"
                    />
                  </g>
                </svg>
              </a>
              <a
                class="slg-share"
                target="_blank"
                href="https://twitter.com/home?status=Custom%20share%20link%20generator%20for%20Facebook%20Twitter%20LinkedIn%20Pinterest%20http://www.seocentury.com/share-link-generator/%20by%20@seocentury"
              >
                <svg class="twitter" viewBox="0 0 30 30">
                  <g>
                    <path
                      d="M30,6.708C28.895,7.199,27.244,7.851,26,8c1.273-0.762,2.539-2.561,3-4c-0.971,0.577-2.087,1.355-3.227,1.773    L25,5c-1.121-1.197-2.23-2-4-2c-3.398,0-6,2.602-6,6c0,0.399,0.047,0.7,0.11,0.956L15,10C9,10,5.034,8.724,2,5    C1.469,5.908,1,6.872,1,8c0,2.136,1.348,3.894,3,5c-1.009-0.033-2.171-0.542-3-1c0,2.98,4.186,6.432,7,7c-1,1-4.623,0.074-5,0    c0.784,2.447,3.309,3.949,6,4c-2.105,1.648-4.647,2.51-7.531,2.51c-0.498,0-0.987-0.029-1.469-0.084C2.723,27.17,6.523,28,10,28    c11.322,0,17-8.867,17-17c0-0.268,0.008-0.736,0-1C28.201,9.132,29.172,7.942,30,6.708z"
                    />
                  </g>
                </svg>
              </a>
              <a
                class="slg-share"
                target="_blank"
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://www.seocentury.com/share-link-generator/&amp;title=Share%20Link%20Generator%20|%20Share%20it!&amp;summary=Generate%20custom%20share%20Links%20for%20Facebook,%20Twitter,%20LinkedIn,%20and%20Pinterest%20and%20use%20everywhere,%20even%20in%20PDF%20file%20and%20emails."
              >
                <svg class="linkedin" viewBox="0 0 30 30">
                  <g>
                    <path
                      d="M11,10h6v3l0,0c0.83-1.572,2.977-3,6-3c6.291,0,7,3.616,7,9v11h-6V20c0-2.318,0.188-5-3-5c-4,0-4,2.393-4,5v10h-6    V10z"
                    />
                    <rect height="20" width="6" x="1" y="10" />
                    <circle cx="4" cy="3.5" r="3.5" />
                  </g>
                </svg>
              </a>
              <a
                class="slg-share"
                target="_blank"
                href="https://pinterest.com/pin/create/button/?url=http://www.seocentury.com/share-link-generator&amp;media=http://www.seocentury.com/blog/wp-content/uploads/2014/08/share-link-generator.jpg&amp;description=Custom%20share%20link%20generator%20for%20Facebook,%20Twitter,%20LinkedIn,%20and%20Pinterest."
              >
                <svg class="pinterest" viewBox="0 0 30 30">
                  <path
                    d="M16,0C7.813,0,3,6.105,3,11c0,2.964,2,6,3,6s2,0,2-1s-2-2-2-5c0-4.354,4.773-8,10-8c4.627,0,7,3.224,7,7  c0,4.968-2.735,9-6,9c-1.803,0-3.433-1.172-3-3c0.519-2.184,1-2,2-6c0.342-1.368-0.433-3-2-3c-1.843,0-4,1.446-4,4c0,1.627,1,3,1,3  s-2.245,7.863-2.576,9.263C7.766,26.049,6.938,30,7.938,30S10,28,12,23c0.295-0.738,1-3,1-3c0.599,1.142,3.14,2,5,2  c5.539,0,9-5.24,9-12C27,4.888,22.58,0,16,0z"
                  />
                </svg>
              </a>
            </p>

            <div class="dinomatic">
              <a
                href="https://dinomatic.com/"
                target="_blank"
                data-ext="dinomatic"
                @click="gaEventTracking"
              >
                <img src="~/static/img/dinomatic.png" alt="dinomatic" data-ext="dinomatic">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShareLinkGenerator',
  head () {
    return {
      title: 'Share Link Generator: Facebook, Twitter, LinkedIn, Pinterest |> SEO Century'
    }
  },
  data () {
    return {
      bodyClass: 'content-center',
      copyData: '',
      showTest: false,
      enableButton: false,
      shareUrl: '',
      shareContent: '',
      shareThumb: '',
      networks: {
        facebook: {
          base: 'https://www.facebook.com/sharer/sharer.php?u=',
          name: 'Facebook',
          url: ''
        },
        twitter: {
          base: 'https://twitter.com/intent/tweet?text=',
          name: 'Twitter',
          url: ''
        },
        linkedin: {
          base: 'https://www.linkedin.com/shareArticle?mini=true&url=',
          name: 'LinkedIn',
          url: ''
        },
        pinterest: {
          base: 'https://pinterest.com/pin/create/button/?url=',
          name: 'Pinterest',
          url: ''
        }
      }
    }
  },
  methods: {
    generateLinks () {
      this.networks.facebook.url = `${this.networks.facebook.base}${this.shareUrl}`

      const shareContent = this.escapeContent(this.shareContent)
      if (shareContent) {
        this.networks.twitter.url = `${this.networks.twitter.base}${shareContent}`
      }

      this.networks.linkedin.url = `${this.networks.linkedin.base}${this.shareUrl}&summary=${shareContent}`

      this.networks.pinterest.url = `${this.networks.pinterest.base}${this.shareUrl}&media=${this.shareThumb}&description=${shareContent}`

      this.showTest = true
    },
    escapeContent (string) {
      return encodeURI(string)
        .replace(/\+/gi, '%2B')
        .replace(/#/gi, '%23')
    },
    gaEventTracking (event) {
      const label = event.target.dataset.ext
      // eslint-disable-next-line
      ga('send', 'event', {
        eventCategory: 'ExtLinks',
        eventAction: 'Click',
        eventLabel: label
      })
    }
  }
}
</script>

<style scoped>
.page.page-slg,
.page-slg .container {
  padding: 1em;
  max-height: none;
  border: 0 none;
}
.subtitle {
  font-weight: 400;
}
.slg-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  glyph-orientation-horizontal: 1em;
  margin-bottom: 2em;
  padding-top: 1em;
  border-top: 1px solid #ccc;
}
.block {
  font-size: 1em;
  padding: 1em;
}
.block input[type="text"],
.block textarea {
  width: 100%;
  font-size: 1em;
  font-family: inherit;
  padding: 0.3em;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
}
.block input[type="text"]:focus,
.block textarea:focus {
  outline: none;
  border-color: #54abef;
}
.block textarea {
  height: 4em;
}
.block p {
  margin-top: 0;
  margin-bottom: 1em;
}
.block .network {
  margin-top: 1em;
  padding: 0.5em;
  color: #fff;
  font-weight: 700;
  display: grid;
  grid-gap: 0.25em;
  grid-template-columns: repeat(2, 1fr);
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
}
.actions {
  justify-self: end;
}
.network .actions svg {
  width: 0.8em;
  height: 0.8em;
  fill-opacity: 0.7;
  fill: #fff;
  cursor: pointer;
}
.network .input {
  grid-column: span 2;
}
.network .input input::placeholder {
  font-weight: 300;
  color: #2d3e4f;
  opacity: 0.5;
}

.facebook {
  background-color: #4167b2;
}
.twitter {
  background-color: #1da1f2;
}
.googleplus {
  background-color: #db4c3f;
}
.linkedin {
  background-color: #1b86bc;
}
.pinterest {
  background-color: #bc0d1e;
}
.button[disabled] {
  cursor: not-allowed;
}
.slg-share-block {
  margin-top: 1em;
}
.slg-share {
  transition: all 0.5s;
}
.slg-share:hover {
  opacity: 0.7;
}
.slg-share svg {
  width: 2em;
  height: 2em;
  fill: #fff;
  padding: 0.5em;
}

@media screen and (max-width: 960px) {
  .page.page-slg,
  .page-slg .container {
    padding: 0.5em;
  }
  .slg-block {
    grid-template-columns: 1fr;
  }
  .slog-block .block {
    padding: 0;
  }
}
.dinomatic {
  margin-bottom: 0;
  margin-top: 1em;
  padding: 0.5em 0;
  border-bottom: 1px solid #ccc;
}
.dinomatic a {
  display: block;
  text-align: center;
}
.dinomatic img {
  max-height: 96px;
}
</style>
