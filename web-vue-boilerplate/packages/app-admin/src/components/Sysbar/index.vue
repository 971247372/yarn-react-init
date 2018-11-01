<template>
  <i-header class="sysbar">
    <div class="item">
      <div class="logo">
        <slot name="logo">
          <div class="fake-logo"></div>
        </slot>
      </div>
      <div class="product">
        <slot name="product">{{product}}</slot>
      </div>
    </div>
    <div class="item">
      <div class="username action">
        <svg-icon icon-class="profile" />
        <slot name="username">
          Username
        </slot>
      </div>
    </div>
  </i-header>
</template>

<script>
export default {
  props: {
    product: {
      type: String,
      default: 'Product Name'
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/color.scss';
.fake-logo {
  width: 30px;
  height: 21px;
  background: #5b6270;
  border-radius: 3px;
}

.sysbar {
  display: flex;
  justify-content: space-between;
  user-select: none;
  background: $system-l0-color;
  height: 48px;
  line-height: 48px;
  padding: 0 16px;
  font-size: 14px;

  .item {
    display: flex;
    align-items: center;
    align-self: center;
  }

  .logo {
    font-size: 21px;
    display: flex;
  }

  .product {
    margin-left: 4px;
    display: none;
    font-weight: 500;
  }

  .username {
    display: none;
  }

  .action {
    cursor: pointer;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }

  @media only screen and (min-width: 30em) {
    .product {
      display: inline;
      margin-left: 8px;
    }
    .username {
      display: inline;
      padding-left: 4px;

      svg {
        margin-right: 4px;
      }
    }
  }
}
</style>
