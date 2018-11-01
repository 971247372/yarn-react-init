<template>
  <div>
    <i-row>
      <i-col span="12">
        <label>Default input</label>
      </i-col>
      <i-col span="10">
        <i-date-picker type="date" placeholder="YYYY - MM - DD"></i-date-picker>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Range input</label>
      </i-col>
      <i-col span="12">
        <i-date-picker type="daterange" placeholder="YYYY - MM - DD ~ YYYY - MM - DD" style="width: 100%"></i-date-picker>
      </i-col>
    </i-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
