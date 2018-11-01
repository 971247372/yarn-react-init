<template>
  <i-row :gutter="30">
    <i-col span="6">
      <div>
        <label>No lines - all items collapsed</label>
      </div>
      <i-collapse simple accordion no-lines>
        <i-panel :name="`${item}`" v-for="item in 3" :key="item">
          {{`Item ${item}`}}
          <p slot="content">Accordion content goes here. It will expand the height of accordion bar and pushes down ths items below.</p>
        </i-panel>
      </i-collapse>
    </i-col>
    <i-col span="6">
      <div>
        <label>No lines - Item 02 expanded</label>
      </div>
      <i-collapse simple accordion no-lines value="2">
        <i-panel :name="`${item}`" v-for="item in 3" :key="item">
          {{`Item ${item}`}}
          <p slot="content">Accordion content goes here. It will expand the height of accordion bar and pushes down ths items below.</p>
        </i-panel>
      </i-collapse>
    </i-col>
    <i-col span="6">
      <div>
        <label>With lines - all items collapsed</label>
      </div>
      <i-collapse simple accordion>
        <i-panel :name="`${item}`" v-for="item in 3" :key="item">
          {{`Item ${item}`}}
          <p slot="content">Accordion content goes here. It will expand the height of accordion bar and pushes down ths items below.</p>
        </i-panel>
      </i-collapse>
    </i-col>
    <i-col span="6">
      <div>
        <label>With lines - Item 02 expanded</label>
      </div>
      <i-collapse simple accordion value="2">
        <i-panel :name="`${item}`" v-for="item in 3" :key="item">
          {{`Item ${item}`}}
          <p slot="content">Accordion content goes here. It will expand the height of accordion bar and pushes down ths items below.</p>
        </i-panel>
      </i-collapse>
    </i-col>
  </i-row>
</template>

<script>
export default {}
</script>

<style>
</style>
