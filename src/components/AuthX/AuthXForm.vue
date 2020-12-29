<template>
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
                <el-row type="flex" :gutter="40" class="flex-wrap mb-1">
                  <el-col :md="12">
                    <el-form-item
                      label="Company Name"
                      prop="companyName"
                      :rules="inputField()">
                      <el-input
                        v-model="form.companyName"
                        placeholder="Enter company name"
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
                <el-row type="flex" class="mb-1">
                  <el-col :span="24">
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
                </el-row>
                <el-row type="flex" :gutter="20" class="flex-wrap mb-1">
                  <el-col :span="24">
                    <el-form-item
                      label="ID Document Verification"
                      prop="ids"
                      :rules="inputField()">
                      <el-checkbox-group v-model="form.ids">
                        <el-checkbox label="Bank Verification Number"></el-checkbox>
                        <el-checkbox label="Drivers License Number"></el-checkbox>
                        <el-checkbox label="CAC No"></el-checkbox>
                        <el-checkbox label="NIN/Phone Number"></el-checkbox>
                        <el-checkbox label="Passport ID"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row type="flex" :gutter="20" class="flex-wrap mb-1">
                  <el-col :span="24">
                    <el-form-item
                      label="Do you want to collect any extra information?"
                      :rules="inputField()">
                      <div v-for="(field, index) in form.extraFields" :key="index" class="extra-field">
                        <el-row type="flex" align="middle" :gutter="20">
                          <el-col :md="16">
                            <el-input
                              v-model="field.name"
                              type="text"
                              placeholder="Name of field"
                              class="mr-1" />
                          </el-col>
                          <el-col :md="8" class="is-flex is-align-center">
                            <el-select v-model="field.type" placeholder="Field type">
                              <el-option
                                v-for="(field, index) in extraFields"
                                :key="index"
                                :label="field"
                                :value="field.toLowerCase()"></el-option>
                            </el-select>
                            <div class="remove-extra--field" @click="removeField(index)"><i class="rd-icon--x-circle"></i> </div>
                          </el-col>
                        </el-row>
                        <el-row v-if="fieldWithOptions(field.type)" type="flex" class="extra-field--options">
                          <el-col :span="24">
                            <el-input
                              v-model="field.options"
                              type="text"
                              placeholder="Enter options separated by comma (Option 1, Option 2)" />
                          </el-col>
                        </el-row>
                      </div>
                      <div class="add-extra--field">
                        <p @click="addField"><i class="rd-icon--plus-circle"></i> Add New Field</p>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <div class="is-flex is-justify-center">
                  <el-button type="primary" @click="save">Save changes</el-button>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </template>
      </card>
    </el-tab-pane>
    <el-tab-pane label="Preview" name="preview">
      <form-preview :form="form" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import FormPreview from './FormPreview'
export default {
  name: 'AuthXForm',
  props: {
    action: {
      type: String,
      default: 'add'
    },
    authx: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: { FormPreview },
  data () {
    return {
      activeTab: 'create',
      form: {
        companyName: '',
        mfa: false,
        companyLogo: '',
        ids: [],
        extraFields: [
          {
            name: '',
            type: '',
            value: '',
            options: ''
          }
        ]
      },
      extraFields: ['Text', 'Textarea', 'Dropdown', 'Radio', 'Checkbox', 'Datepicker']
    }
  },
  methods: {
    fieldWithOptions (field) {
      const fields = ['dropdown', 'radio', 'checkbox']
      return fields.includes(field)
    },
    addField () {
      this.form.extraFields.push({
        name: '',
        type: '',
        value: '',
        options: ''
      })
    },
    removeField (index) {
      this.form.extraFields.splice(index, 1)
    },
    save () {
      //
    }
  },
  created () {
    if (this.action === 'edit') {
      this.form = { ...this.authx }
    }
  }
}
</script>

<style lang="scss" scoped>
.extra-field {
  background: #14050810;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 10px;
}

.extra-field--options {
  margin-top: 7px;
}

.add-extra--field {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  p {
    cursor: pointer;
  }

  i {
    margin-right: 5px;
  }
}

.remove-extra--field {
  cursor: pointer;
  margin-left: 10px;
  margin-top: 5px;
}
</style>
