<template>
  <div>
    <el-row type="flex">
      <el-col :lg="20" class="mx-auto">
        <card :header="false">
          <template slot="content">
            <el-form :model="form" label-position="top" ref="verifyId">
              <el-row type="flex" :gutter="80" class="flex-wrap mb-2">
                <el-col :md="8" :lg="8">
                  <div class="rd-form--section">
                    <h6>Verify Identification Number</h6>
                  </div>
                </el-col>
                <template v-if="step === 1">
                  <el-col :md="16" :lg="16">
                    <el-row type="flex" :gutter="20" class="flex-wrap">
                      <el-col :span="24">
                        <el-form-item
                          label="ID Type"
                          prop="type"
                          :rules="inputField()">
                          <el-select v-model="form.type" placeholder="Select ID Type">
                            <el-option
                              v-for="(idType, index) in idTypes"
                              :key="index"
                              :label="idType"
                              :value="idType"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-form-item
                          label="ID"
                          prop="idNumber"
                          :rules="inputField()">
                          <el-input
                            v-model="form.idNumber"
                            placeholder="Enter ID No"
                          />
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <div class="is-flex is-justify-center">
                      <el-button type="primary" @click="next">Next</el-button>
                    </div>
                  </el-col>
                </template>
                <template v-else-if="step === 2">
                  <el-col :md="16" :lg="16">
                    <el-row type="flex">
                      <el-col :span="24">
                        <el-form-item
                          label="OTP"
                          prop="otp"
                          :rules="inputField()">
                          <el-input
                            v-model="form.otp"
                            v-only-number
                            placeholder="Enter OTP"
                          />
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <div class="text-center mb-1">
                      <el-button type="text" @click="step = 1"><i class="rd-icon--chevron-left"></i> Back</el-button>
                      <el-button type="primary" @click="verify">Verify</el-button>
                    </div>
                    <div class="text-center">
                      <p>Didn't get OTP? <span class="text-primary text-cursor" @click="resendOTP">Resend</span> </p>
                    </div>
                  </el-col>
                </template>
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
  name: 'IdVerification',
  data () {
    return {
      loading: false,
      step: 1,
      form: {
        type: '',
        idNumber: '',
        otp: ''
      },
      idTypes: ['Bank Verification Number', 'National Identity Number', 'Passport ID', 'Driver\'s License Number', 'CAC No']
    }
  },
  methods: {
    next () {
      this.$refs.verifyId.validate(async valid => {
        if (!valid) {
          return false
        }
        this.step = 2
        return true
      })
    },
    resendOTP () {
      this.$message.success('OTP sent successfully.')
    },
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
