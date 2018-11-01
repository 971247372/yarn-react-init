<template>
  <div class="box">
    <div class="box-header">
      <slot name="header">
        <h2>{{header}}</h2>
        <h2 class="subtitle">{{subheader}}</h2>
      </slot>
    </div>
    <div class="box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    subheader: String
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/color.scss';

.box {
  flex: 1;
  padding: 0 24px 24px;
  background: $tile-l2-color;
  margin-bottom: 3px;

  &-header {
    height: 58px;
    line-height: 58px;
  }

  & + & {
    margin-left: 3px;
  }
}
</style>
