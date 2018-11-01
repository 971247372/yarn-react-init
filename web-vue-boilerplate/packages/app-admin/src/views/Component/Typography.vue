<template>
  <div class="typo-wrapper">
    <div>
      <h2>Page title</h2>
      <h2 class="subtitle">Page subtitle</h2>
    </div>
    <div>
      <h4>Tile header</h4>
      <h4 class="subtitle">Subheader</h4>
    </div>
    <div>
      <p>
        Lorem ipsum <b>bold</b> sit amet, consectetur <br/>
        adipiscing elit, sed do eiusmod tempor <br/>
        incididunt ut labore et dolore magna aliqua. <br/>
        Ut enim ad minim veniam, quis nostrud <br/>
        exercitation ullamco laboris nisi ut aliquip ex <br/>
        ea commodo consequat.
      </p>
    </div>
    <div>
      <i-button type="text" style="margin-right: 30px;">Subtle link</i-button>
      <i-button type="text" class="hover">Subtle link hover</i-button>
    </div>
    <div>
      <a>Link</a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.typo-wrapper {
  > div {
    margin: 20px 0;
  }
}
</style>
