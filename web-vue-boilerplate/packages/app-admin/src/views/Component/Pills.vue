<template>
  <i-row>
    <i-col span="2">
      <label>Severity</label>
    </i-col>
    <i-col span="22">
      <Pill v-for="item in pills" :key="item.type" :type="item.type">{{item.count}}</Pill>
    </i-col>
    <i-col span="2">
      <label>Minimized</label>
    </i-col>
    <i-col span="22">
      <Pill mini v-for="item in pills" :key="item.type" :type="item.type" :class="{ selected: item.type === 'major'}">{{item.count}}</Pill>
    </i-col>
  </i-row>
</template>

<script>
import Pill from '@/components/Pill'

export default {
  components: {
    Pill
  },
  data() {
    const pillTypes = ['critical', 'major', 'minor', 'warning', 'indeterminate', 'cleared']
    const counts = ['25', '10', '07', '43', '18', '27']
    return {
      pills: pillTypes.map((type, index) => ({ type, count: counts[index] }))
    }
  }
}
</script>

<style>
</style>
