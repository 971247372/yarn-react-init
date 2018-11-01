<template>
  <div>
    <i-row type="flex" align="middle" style="height: 100px;">
      <i-col span="8">
        <i-tooltip theme="light" placement="right" content="Short info about this" always>
          <label>Right</label>
        </i-tooltip>
      </i-col>
      <i-col span="8">
        <i-tooltip theme="light" placement="top" content="Tooltip text" always>
          <label>Top</label>
        </i-tooltip>
      </i-col>
    </i-row>
    <i-row type="flex" align="middle" style="height: 100px;">
      <i-col span="8">
        <i-tooltip placement="right" content="Short info about this" always>
          <label>Right</label>
        </i-tooltip>
      </i-col>
      <i-col span="8">
        <i-tooltip placement="top" content="Tooltip text" always>
          <label>Top</label>
        </i-tooltip>
      </i-col>
    </i-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
