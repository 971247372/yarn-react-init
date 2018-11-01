<template>
  <div>
    <label>Default</label>
    <br />
    <sysbar />
    <label>With logo</label>
    <br />
    <sysbar product="Product">
      <img :src="logo" slot="logo" style="vertical-align: middle;" />
    </sysbar>
  </div>
</template>

<script>
import Sysbar from '@/components/Sysbar'
import logo from '@/assets/logo.svg'

export default {
  components: { Sysbar },
  data() {
    return {
      logo
    }
  }
}
</script>

<style>
</style>
