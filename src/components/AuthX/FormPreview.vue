<template>
  <card :header="false">
    <template slot="content">
      <el-row type="flex" :gutter="80" class="flex-wrap">
        <el-col :md="8" :lg="8">
          <div class="rd-form--section">
            <h6>Your form</h6>
          </div>
        </el-col>
        <el-col :md="16" :lg="16">
          <div class="authx-form">
            <div class="authx-form--header">
              <div class="authx-form--logo">
                <img v-if="form.companyLogo" :src="getImage(form.companyLogo)" alt="IMG" />
                <i v-else class="rd-icon--image"></i>
              </div>
            </div>
            <div class="authx-form--nav">
              <el-radio-group
                v-model="nav"
                class="rd-radio"
              >
                <el-radio-button label="signup">SIGNUP</el-radio-button>
                <el-radio-button label="login">LOGIN</el-radio-button>
              </el-radio-group>
            </div>
            <div class="authx-form--body">
              <template v-if="nav === 'signup'">
                <el-form :model="signup" label-position="top">
                  <template v-if="signupStep === 1">
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-form-item label="ID">
                          <el-select
                            v-model="signup.id"
                            placeholder="Select ID type">
                            <el-option
                              v-for="(id, index) in form.ids"
                              :key="index"
                              :label="id"
                              :value="id"/>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row v-if="signup.id" type="flex">
                      <el-col :span="24">
                        <el-form-item :label="signup.id">
                          <el-input
                            v-model="signup.id_number"
                            type="text" />
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-form-item label="Username">
                          <el-input
                            v-model="signup.username"
                            type="text" />
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-form-item label="Password">
                          <el-input
                            v-model="signup.password"
                            type="password" />
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <template v-if="form.extraFields && form.extraFields[0].name">
                      <el-row v-for="(field, index) in form.extraFields" :key="index" type="flex">
                        <el-col :span="24">
                          <el-form-item :label="field.name">
                            <el-input
                              v-if="field.type === 'text'"
                              v-model="field.value"
                              type="text" />
                            <el-input
                              v-else-if="field.type === 'textarea'"
                              v-model="field.value"
                              type="textarea"
                              rows="4" />
                            <el-select
                              v-else-if="field.type === 'dropdown'"
                              v-model="field.value">
                              <el-option
                                v-for="(option, index) in field.options.split(',')"
                                :key="index"
                                :label="option"
                                :value="option"/>
                            </el-select>
                            <el-radio-group
                              v-else-if="field.type === 'radio'"
                              v-model="field.value">
                              <el-radio
                                v-for="(option, index) in field.options.split(',')"
                                :key="index"
                                :label="option">{{ option }}</el-radio>
                            </el-radio-group>
                            <el-checkbox-group
                              v-else-if="field.type === 'checkbox'"
                              v-model="field.value">
                              <el-checkbox
                                v-for="(option, index) in field.options.split(',')"
                                :key="index" :label="option" />
                            </el-checkbox-group>
                            <el-date-picker
                              v-else-if="field.type === 'datepicker'"
                              v-model="field.value"
                              value-format="yyyy-MM-dd" />
                          </el-form-item>
                        </el-col>
                      </el-row>
                    </template>
                    <div class="text-center mb-1">
                      <span class="text-muted text-small">By signing up, you agree to our terms of service and privacy policy</span>
                    </div>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-button class="w-100" type="primary" @click="signupStep = 2">Next</el-button>
                      </el-col>
                    </el-row>
                  </template>
                  <template v-else-if="signupStep === 2">
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-form-item label="OTP">
                          <el-input
                            v-model="signup.otp"
                            type="text" />
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-button class="w-100" type="primary">Signup</el-button>
                      </el-col>
                    </el-row>
                  </template>
                </el-form>
              </template>
              <template v-else>
                <el-form :model="login" label-position="top">
                  <template v-if="loginStep === 1">
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-form-item label="Username">
                          <el-input
                            v-model="login.username"
                            type="text" />
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-form-item label="Password">
                          <el-input
                            v-model="login.password"
                            type="password" />
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-button class="w-100" type="primary" @click="loginStep = 2">Login</el-button>
                      </el-col>
                    </el-row>
                  </template>
                  <template v-else-if="loginStep === 2">
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
                        <el-form-item label="">
                          <el-input
                            v-model="login.otp"
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
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-button class="w-100" type="primary">Verify</el-button>
                      </el-col>
                    </el-row>
                  </template>
                </el-form>
              </template>
            </div>
          </div>
        </el-col>
      </el-row>
    </template>
  </card>
</template>

<script>
export default {
  name: 'FormPreview',
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      nav: 'signup',
      signupStep: 1,
      signup: {
        id: '',
        id_number: '',
        username: '',
        password: '',
        otp: ''
      },
      loginStep: 2,
      login: {
        username: '',
        password: '',
        otp: ''
      },
      method: ''
    }
  },
  methods: {
    addField () {
      this.form.extraFields.push({
        name: '',
        type: '',
        options: ''
      })
    },
    removeField (index) {
      this.form.extraFields.splice(index, 1)
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

<style lang="scss" scoped>
.authx-form {
  border-radius: 8px;
  border: 1px solid #14050815;
  box-shadow: -8px 32px 50px rgba(0, 0, 0, 0.08);
  width: 80%;
  margin: 0 auto;

  .authx-form--header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .authx-form--logo {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      width: 80px;
      border-radius: 100%;
      background: #14050815;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 100%;
      }
    }
  }

  .authx-form--body {
    padding: 50px;
  }
}
</style>
