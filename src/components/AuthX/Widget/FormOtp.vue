<template>
  <el-row type="flex">
    <el-col :span="24">
      <div class="text-center mb-1">
        <span v-if="method === ''" class="text-muted text-small">
          We've sent a text message to - <span class="text-black">+234 812 345 6789</span>
        </span>
        <span v-else-if="method === 'resend'" class="text-muted text-small">
          A new code has been sent to - <span class="text-black">+234 812 345 6789</span>
        </span>
        <span v-else-if="method === 'call'" class="text-muted text-small">
          We've sent a 6-digit code via phone call to you - <span class="text-black">+234 812 345 6789</span>
        </span>
        <span v-else-if="method === 'dial'" class="text-muted text-small">
          Dial the following USSD code:
          <span class="text-black">888*000000#</span> with your registered mobile number -
          <span class="text-black">+234 812 345 6789</span>
        </span>
      </div>
      <el-form-item label="OTP">
        <el-input
          v-model="otp"
          type="text"
          placeholder="Enter OTP" />
      </el-form-item>
      <el-row type="flex" :gutter="10" class="mb-1">
        <el-col :span="8">
          <el-button class="w-100" type="info" plain size="small" @click="resend">Resend Code</el-button>
        </el-col>
        <el-col :span="8">
          <el-button class="w-100" type="info" plain size="small" @click="call">Get a Call</el-button>
        </el-col>
        <el-col :span="8">
          <el-button class="w-100" type="info" plain size="small" @click="dial">Dial USSD</el-button>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'FormOtp',
  props: {
    otp: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      method: ''
    }
  },
  computed: {
    setOtp: {
      get () {
        return this.otp
      },
      set (value) {
        this.$emit('update:otp', value)
      }
    }
  },
  methods: {
    resend () {
      this.$message.success('A new code has been sent!')
      setTimeout(() => {
        this.method = 'resend'
      }, 1000)
    },
    call () {
      setTimeout(() => {
        this.method = 'call'
      }, 1000)
    },
    dial () {
      setTimeout(() => {
        this.method = 'dial'
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped></style>
