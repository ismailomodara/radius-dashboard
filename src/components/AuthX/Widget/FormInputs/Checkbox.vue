<template>
  <el-form-item :label="label">
    <el-checkbox-group v-model="value">
      <el-checkbox
        v-for="(option, i) in options.split(',')"
        :key="i"
        :label="option.toLowerCase()">{{ option }}</el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'Checkbox',
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
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      }
    }
  },
  watch: {
    input() {
      this.setValue = this.input;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
