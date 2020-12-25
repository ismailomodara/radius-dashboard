<template>
  <div v-loading.fullscreen="loading">
    <el-row type="flex">
      <el-col :lg="20" class="mx-auto">
        <card :header="false">
          <template slot="content">
            <el-form :model="form" label-position="top">
              <el-row type="flex" :gutter="80" class="flex-wrap mb-2">
                <el-col :md="8" :lg="8">
                  <div class="rd-form--section">
                    <h6>Personal Information</h6>
                  </div>
                </el-col>
                <el-col :md="16" :lg="16">
                  <el-row type="flex" :gutter="20" class="flex-wrap">
                    <el-col :md="12" :lg="12">
                      <el-form-item
                        label="First Name"
                        prop="firstName"
                        :rules="inputField()">
                        <el-input
                          v-model="form.firstName"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="12" :lg="12">
                      <el-form-item
                        label="Last Name"
                        prop="lastName"
                        :rules="inputField()">
                        <el-input
                          v-model="form.lastName"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" :gutter="20" class="flex-wrap">
                    <el-col :span="24">
                      <el-form-item
                        label="BVN"
                        prop="bvn"
                        :rules="inputField()">
                        <el-input
                          v-model="form.bvn"
                          v-only-number
                          maxlength="11"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row type="flex" :gutter="80" class="flex-wrap">
                <el-col :md="8" :lg="8">
                  <div class="rd-form--section">
                    <h6>Company Information</h6>
                  </div>
                </el-col>
                <el-col :md="16" :lg="16">
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Registered Company Name"
                        prop="companyName"
                        :rules="inputField()">
                        <el-input
                          v-model="form.companyName"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" :gutter="20" class="flex-wrap">
                    <el-col :md="10" :lg="10">
                      <el-form-item
                        label="CAC RC No"
                        prop="companyCAC"
                        :rules="inputField()">
                        <el-input
                          v-model="form.companyCAC"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="14" :lg="14">
                      <el-form-item
                        label="Website"
                        prop="companyWebsite"
                        :rules="inputField()">
                        <el-input
                          v-model="form.companyWebsite"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Office Address" prop="companyAddress" :rules="inputField()">
                        <el-input v-model="form.companyAddress" type="textarea" rows="5" />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <div class="is-flex is-justify-center">
                    <el-button type="primary" @click="verify">Verify</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AccountVerification',
  data () {
    return {
      loading: false,
      form: {
        firstName: '',
        lastName: '',
        bvn: '',
        companyName: '',
        companyCAC: '',
        companyWebsite: '',
        companyAddress: ''
      }
    }
  },
  computed: {},
  methods: {
    verify () {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
.rd-form--section {
  h6 {
    font-size: 1rem;
    font-weight: 500;
    margin-left: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -20px;
      transform: translateY(-50%);
      background: var(--primary);
      height: 10px;
      width: 10px;
    }
  }
}
</style>
