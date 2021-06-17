<template>
  <el-form-item :label="label">
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="Select date">
    </el-date-picker>
  </el-form-item>
</template>

<script>
export default {
  name: 'TextInput',
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
