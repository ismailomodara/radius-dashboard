<template>
  <el-dialog :visible.sync="shouldShow" @close="closeEvent" width="30%">
    <template slot="title">
      <h6 class="title">Fund your wallet</h6>
    </template>
    <el-form :model="form" label-position="top">
      <el-row type="flex">
        <el-col :span="24">
          <el-form-item label="Amount">
            <el-input
              v-model="form.amount"
              v-only-number />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="24">
          <el-button class="w-100" type="primary">Fund</el-button>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'FundWallet',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      form: {
        amount: ''
      }
    }
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

<style lang="scss" scoped>
.title {
  color: #140508;
  font-weight: 500;
}
</style>
