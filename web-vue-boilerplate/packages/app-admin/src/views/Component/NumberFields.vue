<template>
  <i-row>
    <i-col span="12">
      <label>Default</label>
    </i-col>
    <i-col span="12">
      <i-input type="number" placeholder="000" />
    </i-col>
    <i-col span="12">
      <label>Disabled</label>
    </i-col>
    <i-col span="12">
      <i-input type="number" placeholder="000" />
    </i-col>
    <i-col span="12">
      <label>On hover</label>
    </i-col>
    <i-col span="12">
      <i-input type="number" class="hover" placeholder="000" value="0" />
    </i-col>
    <i-col span="12">
      <label>Selected</label>
    </i-col>
    <i-col span="12">
      <i-input type="number" class="focus" placeholder="000" value="0" />
    </i-col>
  </i-row>
</template>

<script>
export default {}
</script>

<style>
</style>
