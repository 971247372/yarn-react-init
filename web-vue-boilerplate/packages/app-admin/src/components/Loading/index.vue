<template>
  <svg aria-hidden="true" class="loading-svg" :class="{ small, large }">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
      <g transform="rotate(0)">
        <circle cx="50%" cy="50%" r="15"></circle>
        <circle cx="73.801" cy="68.263" r="3" transform="rotate(248.508 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="2.5s" begin="0s"></animateTransform>
        </circle>
        <circle cx="68.263" cy="73.801" r="3" transform="rotate(263.724 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="2.5s" begin="-0.062s"></animateTransform>
        </circle>
        <circle cx="61.481" cy="77.716" r="3" transform="rotate(278.04 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="2.5s" begin="-0.125s"></animateTransform>
        </circle>
        <circle cx="53.916" cy="79.743" r="3" transform="rotate(290.91 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="2.5s" begin="-0.187s"></animateTransform>
        </circle>
        <circle cx="46.084" cy="79.743" r="3" transform="rotate(302.704 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="2.5s" begin="-0.25s"></animateTransform>
        </circle>
        <circle cx="38.519" cy="77.716" r="3" transform="rotate(313.044 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="2.5s" begin="-0.312s"></animateTransform>
        </circle>
        <circle cx="31.737" cy="73.801" r="3" transform="rotate(322.292 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="2.5s" begin="-0.375s"></animateTransform>
        </circle>
        <circle cx="26.199" cy="68.263" r="3" transform="rotate(329.583 50 50)">
          <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="2.5s" begin="-0.437s"></animateTransform>
        </circle>
        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="2.5s"></animateTransform>
      </g>
    </svg>
  </svg>
</template>

<script>
export default {
  props: {
    small: Boolean,
    large: Boolean
  }
}
</script>

<style scoped lang="scss">
.loading-svg {
  width: 32px;
  height: 32px;
  fill: currentColor;
  overflow: hidden;

  &.small {
    width: 16px;
    height: 16px;
  }
  &.large {
    width: 64px;
    height: 64px;
  }
}
</style>
