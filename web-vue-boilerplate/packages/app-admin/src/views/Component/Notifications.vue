<template>
  <i-row>
    <i-col span="8">
      <div>
        <label>One line</label>
      </div>
      <i-button @click="oneLine">Open</i-button>
    </i-col>
    <i-col span="8">
      <div>
        <label>With body text</label>
      </div>
      <i-button @click="withBodyText">Open</i-button>
    </i-col>
    <i-col span="8">
      <div>
        <label>With actions</label>
      </div>
      <i-button @click="withActions">Open</i-button>
    </i-col>
    <i-col span="8">
      <div>
        <label>Success</label>
      </div>
      <i-button @click="success" type="success">Open</i-button>
    </i-col>
    <i-col span="8">
      <div>
        <label>Error</label>
      </div>
      <i-button @click="error" type="error">Open</i-button>
    </i-col>
  </i-row>
</template>

<script>
export default {
  methods: {
    oneLine() {
      this.$Notice.open({
        title: 'Notification header'
      })
    },
    withBodyText() {
      this.$Notice.open({
        title: 'Notification header',
        desc: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod.'
      })
    },
    withActions() {
      this.$Notice.open({
        title: 'NMaas is ready to use',
        desc: '30-day trial expires on 2016-12-31.'
      })
    },
    success() {
      this.$Notice.success({
        title: 'Order is sent',
        desc: 'You will be notified of its progress.'
      })
    },
    error() {
      this.$Notice.error({
        title: 'order is rejected'
      })
    }
  }
}
</script>

<style>
</style>
