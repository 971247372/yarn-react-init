<template>
  <i-row>
    <i-col span="12">
      <label>Default</label>
    </i-col>
    <i-col span="12">
      <label>Destructive action</label>
    </i-col>
    <i-col span="12">
      <i-button @click="modal1 = true">Open</i-button>
      <i-modal v-model="modal1" title="Dialog header">
        <p>Description</p>
        <div slot="footer">
          <i-button @click="modal1 = false">Action</i-button>
          <i-button type="primary" @click="modal1 = false">Affirmative action</i-button>
        </div>
      </i-modal>
    </i-col>
    <i-col span="12">
      <i-button @click="modal2 = true">Open</i-button>
      <i-modal v-model="modal2" title="Dialog header">
        <p>Description</p>
        <div slot="footer">
          <i-button type="error" @click="modal2 = false">Destructive action</i-button>
          <i-button @click="modal2 = false">Action</i-button>
        </div>
      </i-modal>
    </i-col>
  </i-row>
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
      modal2: false
    }
  }
}
</script>

<style>
</style>
