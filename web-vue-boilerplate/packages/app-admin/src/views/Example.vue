<template>
  <div>
    <box-row>
      <box header="Top tile" subheader="Subheader example">
        <div class="empty-block"></div>
      </box>
    </box-row>
    <box-row>
      <box header="Left tile" subheader="Subheader example">
        <div class="empty-block"></div>
      </box>
      <box header="Right tile" subheader="Subheader example">
        <div class="empty-block"></div>
      </box>
    </box-row>
  </div>
</template>

<script>
import { Box, BoxRow } from '@/components/Box'

export default {
  metaInfo() {
    return {
      title: 'Example'
    }
  },
  components: {
    Box,
    BoxRow
  }
}
</script>

<style scoped lang="scss">
.empty-block {
  height: 360px;
  background: #454545;
}
</style>
