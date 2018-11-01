<template>
  <i-row :gutter="30">
    <i-col span="6">
      <div>
        <label>Collapsed</label>
      </div>
      <i-tree :data="data1"></i-tree>
    </i-col>
    <i-col span="6">
      <div>
        <label>Item 03 expanded</label>
      </div>
      <i-tree :data="data2"></i-tree>
    </i-col>
    <i-col span="6">
      <div>
        <label>Item 02 expanded with checkboxes</label>
      </div>
      <i-tree :data="data3" show-checkbox></i-tree>
    </i-col>
    <i-col span="6">
      <div>
        <label>Third level with checkboxes</label>
      </div>
     <i-tree :data="data4" show-checkbox></i-tree>
    </i-col>
  </i-row>
</template>

<script>
import { cloneDeep, set as _set } from 'lodash'

export default {
  data() {
    const subItems = [
      {
        title: 'Sub-item 01'
      },
      {
        title: 'Sub-item 02'
      },
      {
        title: 'Sub-item 03',
        children: [
          {
            title: 'Sub-item 03 A'
          },
          {
            title: 'Sub-item 03 B'
          },
          {
            title: 'Sub-item 03 C'
          }
        ]
      }
    ]
    const basicData = new Array(3).fill(1).map((_, index) => ({
      title: `Item 0${index + 1}`,
      children: cloneDeep(subItems)
    }))
    return {
      data1: basicData,
      data2: _set(cloneDeep(basicData), [2, 'expand'], true),
      data3: _set(
        _set(
          _set(
            _set(cloneDeep(basicData), [1, 'expand'], true),
            [1, 'children', 1, 'checked'],
            true
          ),
          [1, 'children', 2, 'children', 1, 'checked'],
          true
        ),
        [1, 'children', 2, 'children', 2, 'checked'],
        true
      ),
      data4: _set(
        _set(
          _set(
            _set(
              _set(cloneDeep(basicData), [1, 'expand'], true),
              [1, 'children', 2, 'expand'],
              true
            ),
            [1, 'children', 1, 'checked'],
            true
          ),
          [1, 'children', 2, 'children', 1, 'checked'],
          true
        ),
        [1, 'children', 2, 'children', 2, 'checked'],
        true
      )
    }
  }
}
</script>

<style>
</style>
