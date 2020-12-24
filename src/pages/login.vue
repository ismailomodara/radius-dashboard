<template>
  <div class="rd-login">
    <div class="text-center">
      <h1>Login</h1>
      <p>Provide the details to continue to your account</p>
    </div>
    <el-form :model="form" label-position="top" ref="login">
      <el-row type="flex" class="flex-wrap">
        <el-col :span="24">
          <el-form-item
            v-custom-input="form.email"
            class="rd-custom-input"
            label="Email"
            prop="email"
            :rules="emailField()">
            <el-input type="email" v-model="form.email" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="flex-wrap">
        <el-col :span="24">
          <el-form-item
            v-custom-input="form.password"
            class="rd-custom-input"
            label="Password"
            prop="password"
            :rules="inputField()">
            <el-input type="password" v-model="form.password" />
          </el-form-item>
        </el-col>
      </el-row>
      <div class="rd-login--form__action">
        <el-checkbox v-model="form.rememberMe">Remember me</el-checkbox>
        <router-link :to="{ name: 'forgot-password' }">Forgot password?</router-link>
      </div>
      <div class="mt-1 is-flex is-justify-center">
        <el-button class="w-100" :loading="loggingIn" type="primary" @click="login"
        >Login</el-button
        >
      </div>
    </el-form>
    <div>
      <p>Don't have an account <router-link :to="{ name: 'register' }">Create</router-link> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loggingIn: false,
      form: {
        email: 'user@mail.com',
        password: 'user',
        rememberMe: false
      }
    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'dashboard.index' })
    }
  }
}
</script>

<style scoped lang="scss">
.rd-login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.el-form {
  width: 32%;
  margin: 0 auto;
  padding: 40px 0;
}

.rd-login--form__action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  a {
    color: #606266;
    text-decoration: underline;
    font-weight: 400;

    &:hover {
      color: #140508;
      transition: color 0.3s ease-in;
    }
  }
}

@media (max-width: 1024px) {
  .el-form {
    width: 60%;
  }
}

@media (max-width: 600px) {
  .el-form {
    width: 90%;
  }
}
</style>
