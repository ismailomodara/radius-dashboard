<template>
  <el-dialog class="authx-dialog" :visible.sync="shouldShow" @close="closeEvent" width="100%">
    <form-container :show="shouldShow" :data="data" />
  </el-dialog>
</template>

<script>
import FormContainer from '@/components/AuthX/Widget/FormContainer'

export default {
  name: 'WidgetPreview',
  components: {
    FormContainer
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {}
  },
  computed: {
    shouldShow: {
      get () {
        return this.show
      },
      set (value) {
        this.$emit('update:show', value)
      }
    }
  },
  methods: {
    closeEvent () {
      this.shouldShow = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
