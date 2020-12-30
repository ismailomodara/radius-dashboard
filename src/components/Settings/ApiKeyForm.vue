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
                        label="Set permissions"
                        prop="permissions">
                        <div>
                          <div v-for="(item, i) in form.permissions" :key="i" class="rd-permission">
                            <p>{{ item.label }}</p>
                            <el-switch
                              v-model="item.value"
                              class="mr-1">
                            </el-switch>
                          </div>
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row type="flex" :gutter="80" class="flex-wrap mb-2">
                <el-col :md="8" :lg="8">
                  <div class="rd-form--section">
                    <h6>API Key</h6>
                  </div>
                </el-col>
                <el-col :md="16" :lg="16">
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Key"
                        prop="key">
                        <el-input
                          v-model="form.key"
                          readonly
                        />
                        <div class="is-flex is-justify-end">
                        </div>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row type="flex" :gutter="20">
                    <el-col :md="12">
                      <el-form-item
                        label="Callback URL"
                        prop="callbackURL">
                        <el-input
                          v-model="form.callbackURL"
                          readonly
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :md="12">
                      <el-form-item
                        label="Webhook URL"
                        prop="webhookURL">
                        <el-input
                          v-model="form.webhookURL"
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
        permissions: {
          bvn: {
            label: 'Bank Verification Number (BVN)',
            value: false
          },
          nin: {
            label: 'National Identification Number (NIN)',
            value: false
          },
          drivers: {
            label: 'Drivers License',
            value: false
          },
          cac: {
            label: 'CAC Number',
            value: false
          }
        },
        key: '',
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
.rd-permission {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

.rd-access--explanation {
  font-size: 0.875rem;
  opacity: 0.5;
}
</style>
