<template>
  <i-form label-position="top">
    <i-row>
      <i-col span="12">
        <label>Default</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label">
          <i-checkbox-group v-model="value">
            <i-checkbox label="Option"></i-checkbox>
            <i-checkbox label="Option 2"></i-checkbox>
          </i-checkbox-group>
        </i-form-item>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Disabled</label>
      </i-col>
      <i-col span="10">
        <i-checkbox label="Option" disabled>Option</i-checkbox>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Selected</label>
      </i-col>
      <i-col span="10">
        <i-checkbox label="Option" :value="true">Option</i-checkbox>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Selected disabled</label>
      </i-col>
      <i-col span="10">
        <i-checkbox label="Option" :value="true" disabled>Option</i-checkbox>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Indeterminated selected</label>
      </i-col>
      <i-col span="10">
        <i-checkbox label="Option" indeterminate>Option</i-checkbox>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Indeterminated disabled</label>
      </i-col>
      <i-col span="10">
        <i-checkbox label="Option" indeterminate disabled>Option</i-checkbox>
      </i-col>
    </i-row>
  </i-form>
</template>

<script>
export default {
  data() {
    return {
      value: []
    }
  }
}
</script>

<style>
</style>
