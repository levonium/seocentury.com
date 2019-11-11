<template>
  <span class="switch-theme" role="button" @click="switchTheme">
    <span class="switch-theme-circle" :data-position="position">
      <span class="sr-text">Switch</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      position: 'left'
    }
  },
  methods: {
    switchTheme () {
      const styles = getComputedStyle(document.documentElement)

      // 0 for LIGHT and 1 for DARK
      const theme = styles.getPropertyValue('--theme').trim()
      const colors = {
        text: styles.getPropertyValue('--color--text'),
        bg: styles.getPropertyValue('--color--bg')
      }

      this.position = this.position === 'left' ? 'right' : 'left'
      const gradient = theme === '0'
        ? 'linear-gradient(72deg, #d8d8d8, #fff)'
        : 'linear-gradient(72deg, #18191f, #2c3e50)'

      document.documentElement.style.setProperty('--gradient', gradient)
      document.documentElement.style.setProperty('--color--bg', colors.text)
      document.documentElement.style.setProperty('--color--text', colors.bg)
      document.documentElement.style.setProperty('--theme', theme === '0' ? '1' : '0')
    }
  }
}
</script>

<style>
:root {
  --theme: 0;

  --color--dark: #18191f;
  --color--light: #d8d8d8;

  --color--bg: #fff;
  --color--text: #2c3e50;

  --gradient: linear-gradient(72deg, #18191f, #2c3e50);
}
@media (prefers-color-scheme: dark) {
  :root {
    --theme: 1;

    --color--bg: #2c3e50;
    --color--text: #fff;

    --gradient: linear-gradient(72deg, #d8d8d8, #fff);
  }
}
.switch-theme {
  display: inline-block;
  width: 2.4em;
  height: 18px;
  background-color: var(--color--text);
  border-radius: 8px;
  /* text-align: var(--switch-alignment); */
  text-align: left;
  cursor: pointer;
}
.switch-theme-circle {
  display: inline-block;
  height: 16px;
  width: 16px;
  margin: 1px;
  border-radius: 8px;
  background-color: var(--color--bg);
  transition: all .4s;
  transform: translateX(0);
}
.switch-theme-circle[data-position="right"] {
    transform: translateX(25px);
}
</style>
