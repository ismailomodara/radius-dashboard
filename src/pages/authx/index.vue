<template>
  <div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <h6>Auth X</h6>
          <p>Create a secure & beautiful login pages to easily authenticate and onboard your users.</p>
        </el-col>
      </el-row>
    </div>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="Create" name="create">
        <card :header="false">
          <template slot="content">
            <el-form :model="form" label-position="top" ref="verifyId">
              <el-row type="flex" :gutter="80" class="flex-wrap">
                <el-col :md="8" :lg="8">
                  <div class="rd-form--section">
                    <h6>Design your form</h6>
                  </div>
                </el-col>
                <el-col :md="16" :lg="16">
                  <el-row type="flex" :gutter="40" class="flex-wrap">
                    <el-col :md="12">
                      <el-form-item
                        label="Company Logo"
                        prop="companyLogo"
                        :rules="inputField()">
                        <el-input
                          v-model="form.companyLogo"
                          placeholder="Enter valid URL for Company Logo"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="12">
                      <el-form-item
                        label="Multi-Factor Authentication - MFA"
                        prop="mfa"
                        :rules="inputField()">
                        <el-switch
                          v-model="form.mfa"
                          :active-text="form.mfa ? 'Enabled' : 'Disabled'"
                          class="mr-1">
                        </el-switch>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" :gutter="20" class="flex-wrap">
                    <el-col :span="24">
                      <el-form-item
                        label="ID Document Verification"
                        prop="ids"
                        :rules="inputField()">
                        <el-checkbox-group v-model="form.ids">
                          <el-checkbox label="bvn">Bank Verification Number</el-checkbox>
                          <el-checkbox label="dln">Drivers License Number</el-checkbox>
                          <el-checkbox label="cac">CAC No</el-checkbox>
                          <el-checkbox label="nin">National Identification Number</el-checkbox>
                          <el-checkbox label="passport">Passport ID</el-checkbox>
                        </el-checkbox-group>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <div class="is-flex is-justify-center">
                    <el-button type="primary" @click="next">Save changes</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </card>
      </el-tab-pane>
      <el-tab-pane label="Preview" name="preview">Preview</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'AuthX',
  data () {
    return {
      activeTab: 'create',
      form: {
        companyLogo: '',
        mfa: false,
        ids: [],
        extraField: [
          {
            name: '',
            type: ''
          }
        ]
      }
    }
  },
  methods: {
    save () {
      //
    }
  }
}
</script>

<style lang="scss" scoped></style>
