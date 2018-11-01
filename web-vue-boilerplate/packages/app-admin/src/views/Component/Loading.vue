<template>
  <i-row>
    <i-col span="3">
      <label>Small</label>
      <br />
      <Loading small />
    </i-col>
    <i-col span="3">
      <label>Medium</label>
      <br />
      <Loading />
    </i-col>
    <i-col span="3">
      <label>Large</label>
      <br />
      <Loading large />
    </i-col>
  </i-row>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  components: {
    Loading
  }
}
</script>

<style>
</style>
