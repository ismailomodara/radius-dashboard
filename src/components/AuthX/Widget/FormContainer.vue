<template>
  <div v-if="!loading" class="authx-form--container fadeInUp">
    <div  class="authx-form ">
      <div class="authx-form--header">
        <div class="authx-form--logo">
          <img v-if="data.companyLogo" :src="getImage(data.companyLogo)" alt="IMG" />
          <i v-else class="rd-icon--image"></i>
        </div>
      </div>
      <template v-if="!showForgotPassword">
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
          <form-signup
            v-show="nav === 'signup'"
            :data="data.schema.signup"
            :mfa="data.signupMfa"
            :onboarding="data.onboarding"
            :third-party-signup="data.third_party_access" />
          <form-login
            v-show="nav === 'login'"
            :data="data.schema.login"
            :mfa="data.loginMfa"
            :third-party-login="data.third_party_access"
            @forgot-password="showForgotPassword = true"
          />
        </div>
      </template>
      <template v-else>
        <div class="authx-form--body">
          <form-forgot-password @login="login" />
        </div>
      </template>
    </div>
    <div class="authx-secured">
      <img :src="getImage('padlock.svg')" alt="" >
      <p>Secured with <span>AuthX</span></p>
    </div>
  </div>
</template>

<script>
import FormLogin from '@/components/AuthX/Widget/FormLogin'
import FormSignup from '@/components/AuthX/Widget/FormSignup'
import FormForgotPassword from '@/components/AuthX/Widget/FormForgotPassword'

export default {
  name: 'FormContainer',
  components: {
    FormForgotPassword,
    FormLogin,
    FormSignup
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      nav: 'signup',
      loading: true,
      showForgotPassword: false
    }
  },
  watch: {
    loading () {
      if (!this.loading) {
        setTimeout(() => {
          this.setPrimaryColour()
        }, 100)
      }
    },
    nav () {
      setTimeout(() => {
        this.setPrimaryColour()
      }, 10)
    }
  },
  created () {
    setTimeout(() => {
      this.loading = false
    }, 1000)
  },
  methods: {
    login () {
      this.nav = 'login'
      this.showForgotPassword = false
    },
    closeEvent () {
      this.shouldShow = false
    },
    setPrimaryColour () {
      const primaryColor = `${this.data.companyPrimaryColour}`

      const nav = document.querySelector('.authx-form--nav .el-radio-button__orig-radio:checked + .el-radio-button__inner').style
      nav.color = `${this.data.companyPrimaryColour}`

      const buttons = document.querySelectorAll('.authx-button.el-button--primary')
      buttons.forEach(button => {
        button.style.background = primaryColor
        button.style.borderColor = primaryColor
      })

      const secured = document.querySelector('.authx-secured').style
      secured.background = `${primaryColor}15`
      secured.borderColor = `${primaryColor}50`
    }
  }
}
</script>

<style lang="scss">
.authx-form--container {
  width: 40%;
  position: relative;

  .authx-form {
    position: relative;
    border-radius: 8px;
    border: 1px solid #14050815;
    background: #ffffff;
    box-shadow: -8px 32px 50px rgba(0, 0, 0, 0.08);
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;

    .authx-form--header {
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 0;

      .authx-form--logo {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 45px;
          width: auto;
        }
      }
    }

    .authx-form--body {
      padding: 40px 50px;
      max-height: 600px;
      overflow-y: scroll;
    }
  }

  .authx-input .el-input__inner {
    border-color: var(primaryColor)
  }

  .authx-secured {
    opacity: 0.74;
    padding: 10px;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    margin: 30px auto 0;

    img {
      height: 18px;
      margin-right: 10px;
    }

    p {
      font-size: 13px;
      color: #ffffff;
    }

    span {
      font-weight: 600;
      color: #ffffff;
    }
  }
}

@media (min-width: 1440px) {
  .authx-form--container {
    width: 600px;
  }
}

@media (max-width: 600px) {
  .authx-form--container {
    width: 100% !important;

    .authx-form--body {
      padding: 20px !important;
    }
  }
}
</style>
