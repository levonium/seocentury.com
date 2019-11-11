<template>
  <div class="page page-home">
    <slider />
  </div>
</template>

<script>
import Slider from '~/components/Slider.vue'

export default {
  name: 'Home',
  head () {
    return {
      title: 'SEO Century |> SEO & Website Development Services'
    }
  },
  components: {
    'slider': Slider
  }
}
</script>
