<template>
  <i-row>
    <i-col span="6">
      <label>Default</label>
    </i-col>
    <i-col span="6">
      <label>Primary</label>
    </i-col>
    <i-col span="6">
      <label>Destructive</label>
    </i-col>
    <i-col span="6">
      <label>Icon positions</label>
    </i-col>

    <i-col span="2"></i-col>
    <i-col span="4">
      <i-button>Action</i-button>
    </i-col>
    <i-col span="2"></i-col>
    <i-col span="4">
      <i-button type="primary">Action</i-button>
    </i-col>
    <i-col span="2"></i-col>
    <i-col span="4">
      <i-button type="error">Action</i-button>
    </i-col>
    <i-col span="2">
      <label>Left</label>
    </i-col>
    <i-col span="4">
      <i-button><svg-icon icon-class="arrow_left" style="margin-right: 14px;" />Action</i-button>
    </i-col>

    <i-col span="2">
      <label>Disabled</label>
    </i-col>
    <i-col span="4">
      <i-button disabled>Action</i-button>
    </i-col>
    <i-col span="2">
      <label>Disabled</label>
    </i-col>
    <i-col span="4">
      <i-button disabled type="primary">Action</i-button>
    </i-col>
    <i-col span="2">
      <label>Disabled</label>
    </i-col>
    <i-col span="4">
      <i-button disabled type="error">Action</i-button>
    </i-col>
    <i-col span="2">
      <label>Right</label>
    </i-col>
    <i-col span="4">
      <i-button>Action<svg-icon icon-class="arrow_right" style="margin-left: 14px;" /></i-button>
    </i-col>

    <i-col span="2">
      <label>On hover</label>
    </i-col>
    <i-col span="4">
      <i-button class="hover">Action</i-button>
    </i-col>
    <i-col span="2">
      <label>On hover</label>
    </i-col>
    <i-col span="4">
      <i-button type="primary" class="hover">Action</i-button>
    </i-col>
    <i-col span="2">
      <label>On hover</label>
    </i-col>
    <i-col span="10">
      <i-button type="error" class="hover">Action</i-button>
    </i-col>

    <i-col span="2">
      <label>Pressed</label>
    </i-col>
    <i-col span="4">
      <i-button class="active">Action</i-button>
    </i-col>
    <i-col span="2">
      <label>Pressed</label>
    </i-col>
    <i-col span="4">
      <i-button type="primary" class="active">Action</i-button>
    </i-col>
    <i-col span="2">
      <label>Pressed</label>
    </i-col>
    <i-col span="10">
      <i-button type="error" class="active">Action</i-button>
    </i-col>

  </i-row>
</template>

<script>
export default {}
</script>

<style>
</style>
