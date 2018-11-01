<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Admin App',
    // all titles will be injected into this template
    titleTemplate: '%s | Admin App'
  },
  created() {
    // 设置消息提示显示时间 3 秒 (默认是1.5秒)
    this.$Message.config({ duration: 3 })
    document.body.className = this.theme
  },
  data() {
    return {
      theme: 'dark'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/color.scss';

#app {
  min-width: 100%;
  min-height: 100vh;
  overflow-x: auto;
}
</style>
