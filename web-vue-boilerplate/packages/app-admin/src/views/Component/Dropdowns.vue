<template>
  <i-row>
    <i-col span="12">
      <label>Dropdown button</label>
    </i-col>
    <i-col span="12">
      <i-dropdown>
        <i-button>
          Action
          <svg-icon icon-class="sort_descend" style="margin-left: 14px;" />
        </i-button>
        <i-dropdown-menu slot="list">
          <i-dropdown-item v-for="(item, index) in 5" :key="item">{{`Item ${index + 1}`}}</i-dropdown-item>
        </i-dropdown-menu>
      </i-dropdown>
    </i-col>
    <i-col span="12">
      <label>Combo box</label>
    </i-col>
    <i-col span="10">
      <i-select placeholder="Placeholder" filterable>
        <i-option v-for="(item, index) in 5" :key="item" :value="`Item ${index + 1}`">{{`Item ${index + 1}`}}</i-option>
      </i-select>
    </i-col>
  </i-row>
</template>

<script>
export default {}
</script>

<style>
</style>
