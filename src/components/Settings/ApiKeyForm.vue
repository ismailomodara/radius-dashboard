<template>
  <div>
    <el-row type="flex">
      <el-col :lg="20" class="mx-auto">
        <card :header="false">
          <template slot="content">
            <el-form :model="form" label-position="top">
              <el-row type="flex" :gutter="80" class="flex-wrap mb-2">
                <el-col :md="8" :lg="8">
                  <div class="rd-form--section">
                    <h6>API Name</h6>
                  </div>
                </el-col>
                <el-col :md="16" :lg="16">
                  <el-form-item
                    label="API Name"
                    prop="name">
                    <el-input
                      v-model="form.name"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex" :gutter="80" class="flex-wrap mb-3">
                <el-col :md="8" :lg="8">
                  <div class="rd-form--section">
                    <h6>Permissions</h6>
                  </div>
                </el-col>
                <el-col :md="16" :lg="16">
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label=""
                        prop="permissions">
                        <el-radio-group v-model="form.permission">
                          <el-radio label="full" border>Full Access</el-radio>
                          <el-radio label="restricted" border>Restricted Access</el-radio>
                          <el-radio label="billing" border>Billing Access</el-radio>
                        </el-radio-group>
                      </el-form-item>
                      <span class="rd-access--explanation">
                        {{ access[form.permission] }}
                      </span>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row type="flex" :gutter="80" class="flex-wrap mb-2">
                <el-col :md="8" :lg="8">
                  <div class="rd-form--section">
                    <h6>Production Configuration</h6>
                  </div>
                </el-col>
                <el-col :md="16" :lg="16">
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Secret Key"
                        prop="secretKey">
                        <el-input
                          v-model="form.prod.secretKey"
                          readonly
                        />
                        <div class="is-flex is-justify-end">
                          <p class="text-primary text-cursor">Generate a new secret key</p>
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Public Key"
                        prop="publicKey">
                        <el-input
                          v-model="form.prod.publicKey"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" :gutter="20">
                    <el-col :md="12">
                      <el-form-item
                        label="Callback URL"
                        prop="callbackURL">
                        <el-input
                          v-model="form.prod.callbackURL"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="12">
                      <el-form-item
                        label="Webhook URL"
                        prop="webhookURL">
                        <el-input
                          v-model="form.prod.webhookURL"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row type="flex" :gutter="80" class="flex-wrap">
                <el-col :md="8" :lg="8">
                  <div class="rd-form--section">
                    <h6>Dev Configuration</h6>
                  </div>
                </el-col>
                <el-col :md="16" :lg="16">
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Secret Key"
                        prop="secretKey">
                        <el-input
                          v-model="form.dev.secretKey"
                          readonly
                        />
                        <div class="is-flex is-justify-end">
                          <p class="text-primary text-cursor">Generate a new secret key</p>
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Public Key"
                        prop="publicKey">
                        <el-input
                          v-model="form.dev.publicKey"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" :gutter="20">
                    <el-col :md="12">
                      <el-form-item
                        label="Callback URL"
                        prop="callbackURL">
                        <el-input
                          v-model="form.dev.callbackURL"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="12">
                      <el-form-item
                        label="Webhook URL"
                        prop="webhookURL">
                        <el-input
                          v-model="form.dev.webhookURL"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
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
  name: 'ApiKeyForm',
  data () {
    return {
      loading: false,
      form: {
        name: '',
        permission: 'full',
        prod: {
          secretKey: '',
          publicKey: '',
          callbackURL: '',
          webhookURL: ''
        },
        dev: {
          secretKey: '',
          publicKey: '',
          callbackURL: '',
          webhookURL: ''
        }
      },
      access: {
        full: 'Allows the API Key to access GET, PATCh, PUT, DELETE and POST endpoints for all part of your account, excluding Billing and Email Address Validation.',
        restricted: 'Customize levels of access for all parts of your account, excluding Billing and Email Address Validation. ',
        billing: 'Allows the API to access billing endpoints for the account.'
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

.rd-access--explanation {
  font-size: 0.875rem;
  opacity: 0.5;
}
</style>
