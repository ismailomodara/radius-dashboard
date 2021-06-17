<template>
  <el-form-item :label="label">
    <el-input v-model="input" type="textarea" rows="4" />
  </el-form-item>
</template>

<script>
export default {
  name: 'Textarea',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      input: ''
    }
  },
  computed: {
    setValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('update:value', value)
      }
    }
  },
  watch: {
    input () {
      this.setValue = this.input
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
