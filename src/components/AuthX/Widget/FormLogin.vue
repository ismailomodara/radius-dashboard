<template>
  <el-form :model="form" label-position="top">
    <template v-if="step === 1">
      <div v-if="thirdPartyLogin.length">
        <el-row v-if="thirdPartyLogin.includes('google')" type="flex">
          <el-col :span="24">
            <div class="third-party-access">
              <img :src="getImage('google.svg')" alt="G" />
              <p>Login with Google</p>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="thirdPartyLogin.includes('facebook')" type="flex">
          <el-col :span="24">
            <div class="third-party-access">
              <img :src="getImage('facebook.svg')" alt="G" />
              <p>Login with Facebook</p>
            </div>
          </el-col>
        </el-row>
        <div class="third-party-signup--divider">
          <div>
            <p>OR</p>
          </div>
        </div>
      </div>
      <el-row type="flex">
        <el-col :span="24">
          <el-form-item label="Username">
            <el-input
              v-model="form.username"
              type="text" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="24">
          <el-form-item label="Password">
            <el-input
              v-model="form.password"
              type="password" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="24">
          <div class="is-flex is-justify-center mb-1">
            <p
              class="text-primary text-cursor text-underline"
              @click="forgotPassword">Forgot password?</p>
          </div>
        </el-col>
      </el-row>
    </template>
    <template v-if="step === 2">
      <form-otp :otp.sync="form.otp" />
    </template>
    <div class="mt-1">
      <el-row v-if="mfa && step === 1" type="flex">
        <el-col :span="24">
          <el-button class="authx-button w-100" type="primary" @click="step = 2">Next</el-button>
        </el-col>
      </el-row>
      <el-row v-else type="flex">
        <el-col :span="24">
          <el-button class="authx-button w-100" type="primary" :disabled="disableButton">Verify</el-button>
          <el-button v-if="step === 2" class="w-100" type="text" @click="step = 1">
            <i class="rd-icon--chevron-left"></i> Back
          </el-button>
        </el-col>
      </el-row>
    </div>
  </el-form></template>

<script>
import FormOtp from '@/components/AuthX/Widget/FormOtp'

export default {
  name: 'FormLogin',
  components: { FormOtp },
  props: {
    data: {
      type: Array,
      required: true
    },
    mfa: {
      type: Boolean,
      required: true
    },
    thirdPartyLogin: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      step: 1,
      form: {
        username: '',
        password: '',
        otp: ''
      },
      method: ''
    }
  },
  computed: {
    disableButton () {
      return true
    }
  },
  methods: {
    forgotPassword () {
      this.$emit('forgot-password')
    },
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
