<template>
  <div>
    <el-row type="flex">
      <el-col :lg="20" class="mx-auto">
        <div v-if="showApiKey" class="rd-page--section" ref="apiKey">
          <el-alert
            type="success"
            class="el-alert--purple"
            :closable="false">
            <template slot="title">
              <div class="el-alert--content">
                <p>Your API Key</p>
                <div class="rd-api--key">
                  <h6>198278293.KALS8298U340SKjksd982</h6>
                  <span class="copy" @click="copyKey">
                    <i class="rd-icon--copy"></i>
                  </span>
                </div>
              </div>
            </template>
          </el-alert>
        </div>
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
              <el-row type="flex" :gutter="80" class="flex-wrap mb-2">
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
                    <h6>Environment</h6>
                  </div>
                </el-col>
                <el-col :md="16" :lg="16">
                  <el-row type="flex">
                    <el-col :span="24">
                      <el-form-item
                        label="Select key environment"
                        prop="key">
                        <el-radio-group v-model="form.env">
                          <el-radio label="dev" border>Development</el-radio>
                          <el-radio label="prod" border>Production</el-radio>
                        </el-radio-group>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <div class="is-flex is-justify-end mt-1">
                    <el-button type="primary" @click="save">Save</el-button>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </template>
        </card>
      </el-col>
    </el-row>
    <el-input
      id="api-key"
      class="rd-copy--input"
      v-model="key"
    ></el-input>
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
        env: ''
      },
      key: '198278293.KALS8298U340SKjksd982',
      showApiKey: false
    }
  },
  computed: {},
  methods: {
    save () {
      this.showApiKey = true
    },
    copyKey () {
      const link = document.querySelector('#api-key')
      link.select()
      link.setSelectionRange(0, 99999)

      document.execCommand('copy')

      this.$message({
        message: 'Key copied',
        type: 'success'
      })
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

.el-alert--content {
  p {
    margin-bottom: 5px;
  }
  h6 {
    margin-bottom: 0;
  }
}

.rd-api--key {
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #14050810;
    border-radius: 100px;

    i {
      font-weight: 600;
      color: #140508;
      font-size: 1.1rem;
    }
  }
}

.rd-copy--input {
  opacity: 0;
}
</style>
