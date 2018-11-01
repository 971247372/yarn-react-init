<template>
  <i-row>
    <i-col span="3"></i-col>
    <i-col span="7">
      <label>Thin</label>
    </i-col>
    <i-col span="7">
      <label>Medium</label>
    </i-col>
    <i-col span="7">
      <label>Large</label>
    </i-col>

    <i-col span="3">
      <label>Default</label>
    </i-col>
    <i-col span="7">
      <progress-bar thin :value="40" />
    </i-col>
    <i-col span="7">
      <progress-bar :value="40" />
    </i-col>
    <i-col span="7">
      <progress-bar large :value="40" />
    </i-col>

    <i-col span="3">
      <label>Buffered</label>
    </i-col>
    <i-col span="7">
      <progress-bar thin :value="40" :buffer="70" />
    </i-col>
    <i-col span="7">
      <progress-bar :value="40" :buffer="70" />
    </i-col>
    <i-col span="7">
      <progress-bar large :value="40" :buffer="70" />
    </i-col>

    <i-col span="3">
      <label>Indeterminate</label>
    </i-col>
    <i-col span="7">
      <progress-bar thin stripe />
    </i-col>
    <i-col span="7">
      <progress-bar stripe />
    </i-col>
    <i-col span="7">
      <progress-bar large stripe />
    </i-col>
  </i-row>
</template>

<script>
import ProgressBar from '@/components/ProgressBar'

export default {
  components: {
    ProgressBar
  }
}
</script>

<style scoped>
.progressbar {
  width: 80%;
}
</style>
