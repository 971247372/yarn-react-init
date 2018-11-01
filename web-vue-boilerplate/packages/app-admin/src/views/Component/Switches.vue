<template>
  <i-form label-position="top">
    <i-row>
      <i-col span="12">
        <label>Default</label>
      </i-col>
      <i-col span="10">
        <i-switch size="small" />
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Disabled</label>
      </i-col>
      <i-col span="10">
        <i-switch size="small" disabled />
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Toggled</label>
      </i-col>
      <i-col span="10">
        <i-switch size="small" :value="true"></i-switch>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Toggled disabled</label>
      </i-col>
      <i-col span="10">
        <i-switch size="small" :value="true" disabled></i-switch>
      </i-col>
    </i-row>
  </i-form>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style>
</style>
