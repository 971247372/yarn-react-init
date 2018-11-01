<template>
  <i-form ref="form" :model="formModel" :rules="rules" label-position="top">
    <i-row>
      <i-col span="12">
        <label>Default</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label">
          <i-input placeholder="Placeholder" />
        </i-form-item>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Textarea</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label">
          <i-input placeholder="Placeholder" type="textarea" :rows="3" />
        </i-form-item>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Disabled</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label">
          <i-input placeholder="Placeholder" disabled />
        </i-form-item>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>On hover</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label">
          <i-input placeholder="Placeholder" class="hover" />
        </i-form-item>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Selected</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label">
          <i-input placeholder="Placeholder" class="focus" value="Text" />
        </i-form-item>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Changed value</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label">
          <i-input placeholder="Placeholder" class="dirty" value="Text" />
        </i-form-item>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Validation</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label" prop="mail">
          <i-input placeholder="Placeholder" v-model="formModel.mail" />
        </i-form-item>
      </i-col>
    </i-row>
    <i-row>
      <i-col span="12">
        <label>Read only</label>
      </i-col>
      <i-col span="10">
        <i-form-item label="Label">
          <i-input placeholder="Placeholder" value="Read only value" readonly />
        </i-form-item>
      </i-col>
    </i-row>
  </i-form>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        mail: 'Text'
      },
      rules: {
        mail: [{ type: 'email', message: 'Error: Invalid e-mail format', trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.$refs.form.validate()
  }
}
</script>

<style>
</style>
