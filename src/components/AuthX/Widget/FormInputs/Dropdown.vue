<template>
  <el-form-item :label="label">
    <el-select v-model="value">
      <el-option
        v-for="(option, i) in options.split(',')"
        :key="i"
        :label="option"
        :value="option.toLowerCase()"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
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
