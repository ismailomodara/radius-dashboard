<template>
  <el-form :model="form" ref="form">
    <div v-if="step === 1" class="fadeIn">
      <div v-if="thirdPartySignup.length">
        <el-row v-if="thirdPartySignup.includes('google')" type="flex">
          <el-col :span="24">
            <div class="third-party-access">
              <img :src="getImage('google.svg')" alt="G" />
              <p>Sign up with Google</p>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="thirdPartySignup.includes('facebook')" type="flex">
          <el-col :span="24">
            <div class="third-party-access">
              <img :src="getImage('facebook.svg')" alt="G" />
              <p>Sign up with Facebook</p>
            </div>
          </el-col>
        </el-row>
        <div class="third-party-signup--divider">
          <div>
            <p>OR</p>
          </div>
        </div>
      </div>
      <el-row v-for="(field, index) in data" :key="index" type="flex">
        <el-col :span="24">
          <component
            class="authx-input"
            :is="setComponent(field.type)"
            :label="field.label"
            :options="field.options"
            :value.sync="form[field.name.toLowerCase()]" />
        </el-col>
      </el-row>
    </div>
    <div v-if="step === 2" class="fadeIn">
      <form-otp :otp.sync="form.otp" />
    </div>
    <div v-if="step < 3" class="mt-1">
      <el-row v-if="mfa && step === 1" type="flex">
        <el-col :span="24">
          <el-button class="authx-button w-100" type="primary" @click="step = 2">Next</el-button>
        </el-col>
      </el-row>
      <el-row v-else-if="step === 2" type="flex">
        <el-col :span="24">
          <el-button class="authx-button w-100" type="primary" :disabled="disableButton">Register</el-button>
          <el-button v-if="step === 2" class="w-100" type="text" @click="step = 1">
            <i class="rd-icon--chevron-left"></i> Back</el-button>
        </el-col>
      </el-row>
    </div>
    <div v-if="step === 3" class="fadeIn">
      <form-success />
      <el-row v-if="onboarding" type="flex">
        <el-col :span="24" class="is-flex is-justify-center mt-1">
          <el-button class="authx-button" type="primary" @click="setNextStep">Continue</el-button>
        </el-col>
      </el-row>
    </div>
    <template v-if="step > 3">
      <div v-if="onboarding.liveness && step === 4" class="fadeIn">
        <form-liveness-check />
      </div>
      <div v-else-if="onboarding.location && step === 5" class="fadeIn">
        <form-location-check />
      </div>
      <el-row type="flex">
        <el-col :span="24" class="is-flex is-justify-center mt-1">
          <el-button class="authx-button" type="primary" @click="setNextStep">Proceed</el-button>
        </el-col>
      </el-row>
    </template>
  </el-form>
</template>

<script>
import TextInput from '@/components/AuthX/Widget/FormInputs/TextInput'
import TextArea from '@/components/AuthX/Widget/FormInputs/TextArea'
import Checkbox from '@/components/AuthX/Widget/FormInputs/Checkbox'
import DatePicker from '@/components/AuthX/Widget/FormInputs/DatePicker'
import Dropdown from '@/components/AuthX/Widget/FormInputs/Dropdown'
import File from '@/components/AuthX/Widget/FormInputs/File'
import Radio from '@/components/AuthX/Widget/FormInputs/Radio'
import FormOtp from '@/components/AuthX/Widget/FormOtp'
import FormSuccess from '@/components/AuthX/Widget/FormSuccess'
import FormLivenessCheck from '@/components/AuthX/Widget/FormLivenessCheck'
import FormLocationCheck from '@/components/AuthX/Widget/FormLocationCheck'
import FormDocumentUpload from '@/components/AuthX/Widget/FormDocumentUpload'

export default {
  name: 'FormSignup',
  props: {
    data: {
      type: Array,
      required: true
    },
    mfa: {
      type: Boolean,
      required: true
    },
    onboarding: {
      type: Object,
      required: true
    },
    thirdPartySignup: {
      type: Array,
      required: true
    }
  },
  components: {
    FormDocumentUpload,
    FormLocationCheck,
    FormLivenessCheck,
    FormSuccess,
    FormOtp,
    TextInput,
    TextArea,
    Checkbox,
    DatePicker,
    Dropdown,
    File,
    Radio
  },
  data () {
    return {
      step: 1,
      method: '',
      form: {
        otp: ''
      }
    }
  },
  computed: {
    disableButton () {
      return true
    }
  },
  created () {
    this.data.forEach(field => {
      this.form[field.name.toLowerCase()] = ''
    })
  },
  methods: {
    setComponent (type) {
      switch (type) {
        case 'text':
          return 'text-input'
        case 'email':
          return 'text'
        case 'password':
          return 'text-input'
        case 'textarea':
          return 'text-area'
        case 'checkbox':
          return 'checkbox'
        case 'dropdown':
          return 'dropdown'
        case 'radio':
          return 'radio'
        default:
          break
      }
    },
    setNextStep () {
      if (this.step < 4 && this.onboarding.liveness) {
        this.step = 4
      } else if (this.step < 5 && this.onboarding.location) {
        this.step = 5
      } else {
        //
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
