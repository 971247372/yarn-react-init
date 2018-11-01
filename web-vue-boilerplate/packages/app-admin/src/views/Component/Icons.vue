<template>
  <div>
    <i-tooltip placement="top" :content="item" v-for="item of menuIcons" :key="item">
      <svg-icon :icon-class="item" class-name="icon-item" />
    </i-tooltip>
    <i-tooltip placement="top" :content="item" v-for="item of icons" :key="item">
      <svg-icon :icon-class="item" class-name="icon-item" />
    </i-tooltip>
    <br />
    <i-tooltip placement="top" :content="item" v-for="(item, index) of alarmIcons" :key="item">
      <svg-icon :icon-class="item" class-name="icon-item" :style="{ fontSize: `${18 - 2 * index}px` }" />
    </i-tooltip>
    <i-tooltip placement="top" :content="item" v-for="item of severityIcons" :key="item">
      <svg-icon :icon-class="item" class-name="icon-item" />
    </i-tooltip>
  </div>
</template>

<script>
import { menuIcons, alarmIcons, severityIcons, icons } from './iconList'

export default {
  data() {
    return {
      menuIcons,
      alarmIcons,
      severityIcons,
      icons
    }
  }
}
</script>

<style scoped lang="scss">
.icon-item {
  margin: 0 10px 10px;
}
</style>
