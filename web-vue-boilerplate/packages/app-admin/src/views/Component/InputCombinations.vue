<template>
  <div>
    <i-row>
      <i-col span="12">
        <label>Input and action</label>
      </i-col>
      <i-col span="10">
        <i-input placeholder="Placeholder">
          <i-icon type="ios-search" slot="suffix" />
        </i-input>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="10" offset="12">
        <i-input placeholder="Placeholder" class="hover">
          <i-icon type="ios-search" slot="suffix" />
        </i-input>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Input and button</label>
      </i-col>
      <i-col span="10">
        <i-input placeholder="Placeholder">
          <i-button slot="append">Browser</i-button>
        </i-input>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="10" offset="12">
        <i-input placeholder="Placeholder">
          <i-button slot="append" class="hover">Browser</i-button>
        </i-input>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Input and primary button</label>
      </i-col>
      <i-col span="10">
        <i-input placeholder="Placeholder">
          <i-button type="primary" slot="append">Browser</i-button>
        </i-input>
      </i-col>
    </i-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
