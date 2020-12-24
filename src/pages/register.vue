<template>
  <div class="rd-register">
    <div class="text-center">
      <h1>Register</h1>
      <p>Provide the details to create an account</p>
    </div>
    <el-form :model="form" label-position="top" ref="login">
      <el-row type="flex" class="flex-wrap">
        <el-col :span="24">
          <el-form-item
            v-custom-input="form.name"
            class="rd-custom-input"
            label="Company name"
            prop="name"
            :rules="inputField()">
            <el-input type="text" v-model="form.name" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" class="flex-wrap">
        <el-col :span="24">
          <el-form-item
            v-custom-input="form.email"
            class="rd-custom-input"
            label="Company email"
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
      <div class="mt-1 is-flex is-justify-center">
        <el-button class="w-100" :loading="loggingIn" type="primary" @click="register"
        >Register</el-button
        >
      </div>
    </el-form>
    <div>
      <p>Have an account? <router-link :to="{ name: 'login' }">Login</router-link> </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      loggingIn: false,
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register () {
      this.$message.success('Account created')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped lang="scss">
.rd-register {
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
