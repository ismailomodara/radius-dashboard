<template>
  <div v-loading.fullscreen="loading">
    <el-row type="flex">
      <el-col :lg="20" class="mx-auto">
        <card :header="false">
          <template slot="content">
            <el-row type="flex" :gutter="80" class="flex-wrap mb-2">
              <el-col :md="8" :lg="8">
                <div class="rd-form--section">
                  <h6>Live: API Configuration</h6>
                </div>
              </el-col>
              <el-col :md="16" :lg="16">
                <el-form :model="live" label-position="top">
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Secret Key"
                        prop="secretKey">
                        <el-input
                          v-model="live.secretKey"
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
                          v-model="live.publicKey"
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
                          v-model="live.callbackURL"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="12">
                      <el-form-item
                        label="Webhook URL"
                        prop="webhookURL">
                        <el-input
                          v-model="live.webhookURL"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </el-col>
            </el-row>
            <el-row type="flex" :gutter="80" class="flex-wrap">
              <el-col :md="8" :lg="8">
                <div class="rd-form--section">
                  <h6>Test: API Configuration</h6>
                </div>
              </el-col>
              <el-col :md="16" :lg="16">
                <el-form :model="test" label-position="top">
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Secret Key"
                        prop="secretKey">
                        <el-input
                          v-model="test.secretKey"
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
                          v-model="test.publicKey"
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
                          v-model="test.callbackURL"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="12">
                      <el-form-item
                        label="Webhook URL"
                        prop="webhookURL">
                        <el-input
                          v-model="test.webhookURL"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </el-col>
            </el-row>
          </template>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SettingsIndex',
  data () {
    return {
      loading: false,
      live: {
        secretKey: '',
        publicKey: '',
        callbackURL: '',
        webhookURL: ''
      },
      test: {
        secretKey: '',
        publicKey: '',
        callbackURL: '',
        webhookURL: ''
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
