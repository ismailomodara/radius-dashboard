<template>
  <el-form-item :label="label">
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :auto-upload="false">
      <el-button slot="trigger" size="small" plain>Select file</el-button>
    </el-upload>
  </el-form-item>
</template>

<script>
export default {
  name: 'File',
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
