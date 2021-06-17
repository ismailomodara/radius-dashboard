<template>
  <el-form :model="form" label-position="top">
    <template v-if="step === 1">
      <el-row type="flex">
        <el-col :span="24">
          <el-form-item label="Email">
            <el-input
              v-model="form.email"
              type="text" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex">
        <el-col :span="24">
          <el-button class="authx-button w-100" type="primary" @click="step = 2">Send link</el-button>
          <el-button class="w-100" type="text" @click="login">
            <i class="rd-icon--chevron-left"></i> Back to login
          </el-button>
        </el-col>
      </el-row>
    </template>
    <template v-if="step === 2">
      <div>
        <form-success message="Link sent successfully. Check your email." />
        <div class="is-flex is-justify-center my-1">
          <p class="text-primary" @click="login">Back to login</p>
        </div>
      </div>
    </template>
  </el-form>
</template>

<script>
import FormSuccess from '@/components/AuthX/Widget/FormSuccess'

export default {
  name: 'FormForgotPassword',
  components: {
    FormSuccess
  },
  data () {
    return {
      step: 1,
      form: {
        email: ''
      }
    }
  },
  methods: {
    login () {
      this.$emit('login')
    },
    sendLink () {
      this.$message.success('A password reset link has been sent!')
      setTimeout(() => {
        this.method = 'resend'
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped></style>
