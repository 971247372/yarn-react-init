<template>
  <i-row :gutter="30">
    <i-col span="8">
      <label>Default</label>
    </i-col>
    <i-col span="8">
      <label>More</label>
    </i-col>
    <i-col span="8">
      <label>Using icons</label>
    </i-col>
    <i-col span="8">
      <i-tabs value="1">
        <i-tab-pane label="Active tab" name="1"></i-tab-pane>
        <i-tab-pane label="Inactive tab" name="2"></i-tab-pane>
        <i-tab-pane label="Inactive tab" name="3"></i-tab-pane>
      </i-tabs>
    </i-col>
    <i-col span="8">
      <i-tabs value="1">
        <i-tab-pane label="Active tab" name="1"></i-tab-pane>
        <i-tab-pane label="Inactive tab" name="2"></i-tab-pane>
        <i-tab-pane label="Inactive tab" name="3"></i-tab-pane>
        <i-tab-pane label="Inactive tab" name="4"></i-tab-pane>
        <i-tab-pane label="Inactive tab" name="5"></i-tab-pane>
        <i-tab-pane label="Inactive tab" name="6"></i-tab-pane>
      </i-tabs>
    </i-col>
    <i-col span="8">
      <i-tabs value="1">
        <i-tab-pane icon="md-pie" name="1"></i-tab-pane>
        <i-tab-pane icon="md-list" name="2"></i-tab-pane>
      </i-tabs>
    </i-col>
  </i-row>
</template>

<script>
export default {}
</script>

<style>
</style>
