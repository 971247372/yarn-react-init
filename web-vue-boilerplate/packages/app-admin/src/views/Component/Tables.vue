<template>
  <i-row :gutter="50">
    <i-col span="12">
      <div>
        <label>Solid line</label>
      </div>
      <i-table :columns="basicColumns" :data="data"></i-table>
    </i-col>
    <i-col span="12">
      <div>
        <label>Solid line -- sortable</label>
      </div>
      <i-table :columns="sortableColumns" :data="data"></i-table>
    </i-col>
    <i-col span="12">
      <div>
        <label>Solid line -- selectable</label>
      </div>
      <i-table :columns="selectableColumns" :data="data"></i-table>
    </i-col>
    <i-col span="12">
      <div>
        <label>Dashed line -- selectable + sortable</label>
      </div>
      <i-table :columns="fullColumns" :data="data" dashed></i-table>
    </i-col>
    <i-col span="12">
      <div>
        <label>Striped line -- selectable + sortable</label>
      </div>
      <i-table :columns="fullColumns" :data="data" stripe></i-table>
    </i-col>
  </i-row>
</template>

<script>
export default {
  data() {
    const basicColumns = [
      {
        title: 'Title 1',
        key: 'k1'
      },
      {
        title: 'Title 2',
        key: 'k2'
      },
      {
        title: 'Title 3',
        key: 'k3'
      },
      {
        title: 'Title 4',
        key: 'k4'
      }
    ]
    return {
      basicColumns,
      sortableColumns: basicColumns.map(item => ({ ...item, sortable: true })),
      selectableColumns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        ...basicColumns
      ],
      fullColumns: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        ...basicColumns.map(item => ({ ...item, sortable: true }))
      ],
      data: new Array(3).fill(0).map(() => ({
        k1: 'Item 1',
        k2: 'Item 2',
        k3: 'Item 3',
        k4: 'Item 4'
      }))
    }
  }
}
</script>

<style>
</style>
