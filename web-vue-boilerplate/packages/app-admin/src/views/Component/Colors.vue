<template>
  <i-row>
    <i-col span="1">
      <label>Layers</label>
    </i-col>
    <i-col span="11">
      <div class="color-item">
        <div class="color-block system-l0"></div>
        <div>System L0</div>
        <label>#0C0C0C</label>
      </div>
      <div class="color-item">
        <div class="color-block app-l1"></div>
        <div>APP L1</div>
        <label>#181818</label>
      </div>
      <div class="color-item">
        <div class="color-block tile-l2"></div>
        <div>Tile L2</div>
        <label>#242424</label>
      </div>
    </i-col>
    <i-col span="1">
      <label>Status</label>
    </i-col>
    <i-col span="11">
      <div class="color-item">
        <div class="color-block green"></div>
        <div>Green</div>
        <label>#288964</label>
      </div>
      <div class="color-item">
        <div class="color-block yellow"></div>
        <div>Yellow</div>
        <label>#DCAF00</label>
      </div>
      <div class="color-item">
        <div class="color-block orange"></div>
        <div>Orange</div>
        <label>#E66E19</label>
      </div>
      <div class="color-item">
        <div class="color-block red"></div>
        <div>Red</div>
        <label>#DC2D37</label>
      </div>
    </i-col>
    <i-col span="1">
      <label>Text</label>
    </i-col>
    <i-col span="11">
      <div class="color-item">
        <div class="color-block text"></div>
        <div>Text</div>
        <label>#F2F2F2</label>
      </div>
      <div class="color-item">
        <div class="color-block gray"></div>
        <div>Gray</div>
        <label>#767676</label>
      </div>
      <div class="color-item">
        <div class="color-block link-blue"></div>
        <div>Link Blue</div>
        <label>#33A3FF</label>
      </div>
    </i-col>
    <i-col span="1">
      <label>Brand</label>
    </i-col>
    <i-col span="11">
      <div class="color-item">
        <div class="color-block blue"></div>
        <div>Blue</div>
        <label>#0082F0</label>
      </div>
      <div class="color-item">
        <div class="color-block purple"></div>
        <div>Purple</div>
        <label>#8E45B0</label>
      </div>
    </i-col>
  </i-row>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/color.scss';
.color-item {
  display: inline-block;

  & + & {
    margin-left: 14px;
  }
}
.color-block {
  display: inline-block;
  width: 100px;
  height: 36px;
  border: 1px solid;

  &.system-l0 {
    background: $system-l0-color;
    border-color: $system-l0-color;
  }
  &.app-l1 {
    background: $app-l1-color;
    border-color: $app-l1-color;
  }
  &.tile-l2 {
    background: $tile-l2-color;
    border-color: $gray-color;
  }
  &.text {
    background: $text-color;
    border-color: $text-color;
  }
  &.gray {
    background: $gray-color;
    border-color: $gray-color;
  }
  &.link-blue {
    background: $link-blue-color;
    border-color: $link-blue-color;
  }
  &.green {
    background: $green-color;
    border-color: $green-color;
  }
  &.yellow {
    background: $yellow-color;
    border-color: $yellow-color;
  }
  &.orange {
    background: $orange-color;
    border-color: $orange-color;
  }
  &.red {
    background: $red-color;
    border-color: $red-color;
  }
  &.blue {
    background: $blue-color;
    border-color: $blue-color;
  }
  &.purple {
    background: $purple-color;
    border-color: $purple-color;
  }
}
</style>
