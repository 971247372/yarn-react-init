<template>
  <i-form label-position="top">
    <i-row>
      <i-col span="12">
        <label>Default</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label">
          <i-radio-group v-model="value">
            <i-radio label="Option"></i-radio>
            <i-radio label="Option 2"></i-radio>
          </i-radio-group>
        </i-form-item>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Disabled</label>
      </i-col>
      <i-col span="10">
        <i-radio label="Option" disabled></i-radio>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Selected</label>
      </i-col>
      <i-col span="10">
        <i-radio label="Option" :value="true"></i-radio>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Selected disabled</label>
      </i-col>
      <i-col span="10">
        <i-radio label="Option" :value="true" disabled></i-radio>
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
