<template>
  <div>
    <card class="authx-form">
      <template slot="header">
        <div class="w-100 is-flex is-justify-between is-align-center mb-3">
          <h4>Design your form</h4>
        </div>
      </template>
      <template slot="content">
        <el-form :model="form" label-position="top" ref="authXForm">
          <el-row type="flex" :gutter="80" class="authx-form-section">
            <el-col :md="8" :lg="8">
              <div class="rd-form--section">
                <h6>Customization</h6>
              </div>
            </el-col>
            <el-col :md="16" :lg="16">
              <el-row type="flex" :gutter="40" class="flex-wrap">
                <el-col :span="24">
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
              </el-row>
              <el-row type="flex" class="mb-1">
                <el-col :span="24">
                  <el-form-item
                      label="Company Logo"
                      prop="companyLogo"
                      :rules="inputField()">
                    <image-uploader :photo-url.sync="form.companyLogo" />
                    <div class="is-flex is-justify-center my-1">
                      <p>OR</p>
                    </div>
                    <el-input
                        v-model="form.companyLogo"
                        placeholder="Enter valid URL for Company Logo"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex" :gutter="20">
                <el-col :md="12" :lg="12">
                  <el-form-item
                      label="Primary Colour"
                      prop="companyPrimaryColour"
                      :rules="inputField()">
                    <el-color-picker v-model="form.companyPrimaryColour"></el-color-picker>
                  </el-form-item>
                </el-col>
                <el-col :md="12" :lg="12">
                  <el-form-item
                      label="Secondary Colour"
                      prop="companySecondaryColour">
                    <el-color-picker v-model="form.companySecondaryColour" show-alpha></el-color-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="80" class="authx-form-section">
            <el-col :md="8" :lg="8">
              <div class="rd-form--section">
                <h6>Verification</h6>
              </div>
            </el-col>
            <el-col :md="16" :lg="16">
              <el-row type="flex">
                <el-col :span="24">
                  <div v-for="(field, index) in form.identificationFieldsCompulsory" :key="index" class="compulsory_fields">
                    <h6>{{ field.name }}</h6>
                    <el-row  type="flex" :gutter="20" class="flex-wrap" align="middle">
                      <el-col :md="field.type === 'password' ? 18 : 10" :lg="field.type === 'password' ? 18 : 10">
                        <el-input
                            v-model="field.label"
                            type="text"
                            placeholder="Enter label name" />
                      </el-col>
                      <el-col v-if="field.type !== 'password'" :md="8" :lg="8">
                        <el-select v-model="field.type" placeholder="Select">
                          <el-option
                              v-for="(type, index) in fieldTypesText"
                              :key="index"
                              :label="type"
                              :value="type.toLowerCase()" />
                        </el-select>
                      </el-col>
                      <el-col :md="6" :lg="6">
                        <el-switch
                            v-model="field.required"
                            :active-value="true"
                            :inactive-value="false"
                            active-text="Required"
                            disabled
                        />
                      </el-col>
                    </el-row>
                    <el-row v-if="field.name === 'Password'"  type="flex" :gutter="20" class="flex-wrap mt-2" align="middle">
                      <el-col :md="5" :lg="5">
                        <el-form-item label="Min Length">
                          <el-input
                              v-model="field.rules.length"
                              type="number"
                              :min="8"
                              placeholder="Enter password length name" />
                        </el-form-item>
                      </el-col>
                      <el-col :md="19" :lg="19">
                        <el-form-item label="Characters">
                          <div class="is-flex">
                            <el-checkbox-group v-model="field.rules.characters">
                              <el-checkbox label="uppercase">Uppercase</el-checkbox>
                              <el-checkbox label="number">Number</el-checkbox>
                              <el-checkbox label="special">Special Character</el-checkbox>
                            </el-checkbox-group>
                          </div>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="80" class="authx-form-section">
            <el-col :md="8" :lg="8">
              <div class="rd-form--section">
                <h6>Additional Fields</h6>
              </div>
            </el-col>
            <el-col :md="16" :lg="16">
              <el-row type="flex" :gutter="20" class="flex-wrap">
                <el-col :span="24">
                  <el-form-item
                    label="Verification Type"
                    prop="identificationType">
                    <el-checkbox-group
                      v-model="form.identificationType"
                      class="is-flex is-justify-between flex-wrap"
                      @change="setIdType"
                    >
                      <el-checkbox
                        v-for="(value, key, i) in identificationTypes"
                        :key="i"
                        :label="key"
                        border
                        class="mr-0">{{ value.label }}</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex" v-if="form.identificationFields.length">
                <el-col :span="24">
                  <el-table
                    :data="(datas = form.identificationFields)"
                    empty-text="No Fields"
                    class="fadeIn"
                  >
                    <el-table-column width="40">
                      <template slot-scope="scope">
                        <el-checkbox v-model="scope.row.selected" />
                      </template>
                    </el-table-column>
                    <el-table-column width="240">
                      <template slot="header">
                    <span>
                      Label
                    </span>
                      </template>
                      <template slot-scope="scope">
                        <el-input
                          v-model="scope.row.label"
                          type="text"
                          size="medium"
                          placeholder="Name of field"
                          :readonly="scope.row.readonly" />
                      </template>
                    </el-table-column>
                    <el-table-column width="140">
                      <template slot="header">
                    <span>
                      Type
                    </span>
                      </template>
                      <template slot-scope="scope">
                        <el-select v-model="scope.row.type" size="medium" placeholder="Select" @change="editOptions">
                          <el-option
                            v-for="(field, index) in fieldTypes"
                            :key="index"
                            :label="field"
                            :value="field.toLowerCase()"
                            :disabled="scope.row.readonly"></el-option>
                        </el-select>
                      </template>
                    </el-table-column>
                    <el-table-column width="100">
                      <template slot="header">
                    <span>
                      Required
                    </span>
                      </template>
                      <template slot-scope="scope">
                        <el-switch v-model="scope.row.required" />
                      </template>
                    </el-table-column>
                    <el-table-column>
                      <template slot="header">
                    <span>
                      Autofill
                    </span>
                      </template>
                      <template slot-scope="scope">
                        <el-switch v-model="scope.row.autofill" :disabled="!scope.row.default" />
                      </template>
                    </el-table-column>
                    <el-table-column align="right">
                      <template slot-scope="scope">
                        <div class="field__action">
                          <div
                            v-if="fieldTypesWithOptions.includes(scope.row.type)"
                            class="field__edit"
                            @click="editField(scope.$index)"
                          >
                            <span><i class="el-icon-edit"></i></span>
                          </div>
                          <div
                            class="field__remove"
                            @click="removeField(scope.$index)"
                          >
                            <span><i class="el-icon-close"></i></span>
                          </div>
                        </div>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
              <el-row type="flex">
                <el-col :span="24">
                  <div class="field__add" @click="addField">
                    <i class="rd-icon--plus-circle"></i>
                    <p>Add New Field</p>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="80" class="authx-form-section">
            <el-col :md="8" :lg="8">
              <div class="rd-form--section">
                <h6>Development</h6>
              </div>
            </el-col>
            <el-col :md="16" :lg="16">
              <el-row type="flex" :gutter="40" class="flex-wrap mb-1">
                <el-col :span="24">
                  <el-form-item
                      label="Domain"
                      prop="domain"
                      :rules="urlField()">
                    <el-input
                        v-model="form.domain"
                        placeholder="Enter company domain name"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row type="flex" class="mb-1">
                <el-col :span="24">
                  <el-form-item
                      label="Redirect Url"
                      prop="redirectUrl"
                      :rules="urlField()">
                    <el-input
                        v-model="form.redirectUrl"
                        placeholder="Enter a valid redirect URL"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="80" class="authx-form-section">
            <el-col :md="8" :lg="8">
              <div class="rd-form--section">
                <h6>Authentication</h6>
              </div>
            </el-col>
            <el-col :md="16" :lg="16">
              <el-row type="flex" :gutter="40" class="flex-wrap mb-1">
                <el-col :md="6" :lg="6">
                  <el-form-item
                    label="2FA for Signup"
                    prop="signupMfa"
                    :rules="inputField()">
                    <el-switch
                      v-model="form.signupMfa"
                      :active-value="true"
                      :inactive-value="false"
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="12" :lg="12">
                  <el-form-item
                      label="Login Parameters"
                      prop="loginParameters"
                      :rules="inputField()">
                    <el-checkbox-group v-model="form.loginParameters">
                      <el-checkbox label="username" disabled>Username</el-checkbox>
                      <el-checkbox label="password" disabled>Password</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>

                <el-col :md="6" :lg="6">
                  <el-form-item
                      label="2FA for Login"
                      prop="loginMfa"
                      :rules="inputField()">
                    <el-switch
                      v-model="form.loginMfa"
                      :active-value="true"
                      :inactive-value="false"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="80" class="authx-form-section">
            <el-col :md="8" :lg="8">
              <div class="rd-form--section">
                <h6>Onboarding</h6>
              </div>
            </el-col>
            <el-col :md="16" :lg="16">
              <el-row type="flex" :gutter="40" class="flex-wrap mb-1">
                <el-col :md="8" :lg="8">
                  <el-form-item
                    label="Photo (Liveness check)">
                    <el-switch
                      v-model="form.onboarding.liveness"
                      :active-value="true"
                      :inactive-value="false"
                    />
                  </el-form-item>
                </el-col>
                <el-col :md="10" :lg="10">
                  <el-form-item
                    label="Location (Get user's location)">
                    <el-switch
                      v-model="form.onboarding.location"
                      :active-value="true"
                      :inactive-value="false"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="80" class="authx-form-section">
            <el-col :md="8" :lg="8">
              <div class="rd-form--section">
                <h6>3rd-Party Signup</h6>
              </div>
            </el-col>
            <el-col :md="16" :lg="16">
              <el-row type="flex" class="mb-1">
                <el-col :span="24">
                  <el-form-item
                    label="Allow users to signup/login with">
                    <el-checkbox-group v-model="form.third_party_access">
                      <el-checkbox label="google" border>Google</el-checkbox>
                      <el-checkbox label="facebook" border>Facebook</el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="flex">
            <el-col :span="24">
              <div class="is-flex is-justify-end">
                <el-button type="outline" plain @click="preview">Preview</el-button>
                <el-button type="primary" @click="save">Save</el-button>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </card>
    <el-dialog :visible.sync="showEditFieldOptions" @close="showEditFieldOptions = false" width="40%">
      <template slot="title">
        <h6 class="title">Field Options</h6>
      </template>
      <el-form :model="field" label-position="top" ref="fund">
        <el-row type="flex">
          <el-col :span="24">
            <el-form-item
                label=""
                prop="options"
                :rules="inputField()">
              <el-input
                  v-model="field.options"
                  type="text"
                  placeholder="Enter options separated by comma (Option 1, Option 2)" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row type="flex">
          <el-col :span="24">
            <el-button size="medium" class="w-100" type="primary" :disabled="!field.options" @click="saveOptions">Save</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <widget-preview :show.sync="showWidgetPreview" :data="widgetData" />
  </div>
</template>

<script>
import WidgetPreview from '@/components/AuthX/Widget/WidgetPreview'
import ImageUploader from '@/components/Base/ImageUploader'

export default {
  name: 'AuthXForm',
  components: { ImageUploader, WidgetPreview },
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
  data () {
    return {
      activeTab: 'create',
      form: {
        companyName: '',
        companyLogo: '',
        companyPrimaryColour: 'rgb(208, 81, 105)',
        companySecondaryColour: 'rgb(20, 5, 8)',
        identificationType: [],
        identificationFields: [],
        identificationFieldsCompulsory: [
          {
            name: 'Username',
            label: 'Username',
            type: 'text',
            required: true
          },
          {
            name: 'Password',
            label: 'Password',
            type: 'password',
            rules: {
              length: 8,
              characters: ['uppercase', 'special']
            },
            required: true
          }
        ],
        domain: '',
        redirectUrl: '',
        signupMfa: true,
        loginParameters: ['username', 'password'],
        loginMfa: true,
        onboarding: {
          liveness: false,
          location: false
        },
        third_party_access: []
      },
      identificationTypes: {
        bvn: {
          label: 'BVN',
          defaultFields: ['First name', 'Last name', 'Phone number']
        },
        cac: {
          label: 'CAC No',
          defaultFields: ['Company name', 'Address', 'Phone number']
        },
        drivers_license: {
          label: 'Drivers License',
          defaultFields: ['First name', 'Last name', 'Address']
        },
        nin: {
          label: 'NIN',
          defaultFields: ['First name', 'Last name', 'Date of birth', 'Phone number']
        },
        passport_id: {
          label: 'Passport ID',
          defaultFields: ['First name', 'Last name', 'Date of birth', 'Phone number']
        }
      },
      fieldTypes: ['Text', 'Textarea', 'Dropdown', 'Radio', 'Checkbox', 'Datepicker', 'File'],
      fieldTypesText: ['Text', 'Email', 'Number'],
      fieldTypesWithOptions: ['dropdown', 'radio', 'checkbox'],
      showEditFieldOptions: false,
      field: {
        index: null,
        options: ''
      },
      widgetData: {},
      showWidgetPreview: false
    }
  },
  methods: {
    setIdType (value) {
      this.form.identificationType = value.length ? [value.pop()] : []
      if (this.form.identificationType.length) {
        const identificationType = {
          name: this.formatText(this.form.identificationType[0]),
          label: this.formatText(this.form.identificationType[0]),
          type: 'text',
          required: true
        }
        if (this.form.identificationFieldsCompulsory.length === 2) {
          this.form.identificationFieldsCompulsory.unshift(identificationType)
        } else {
          this.form.identificationFieldsCompulsory.shift()
          this.form.identificationFieldsCompulsory.unshift(identificationType)
        }
      } else {
        this.form.identificationFieldsCompulsory.shift()
      }
      this.setDefaultFields()
    },
    setDefaultFields () {
      this.form.identificationFields = []
      const fields = this.identificationTypes[this.form.identificationType].defaultFields
      fields.forEach(field => {
        this.form.identificationFields.push({
          selected: true,
          default: true,
          label: field,
          name: field.toLowerCase(),
          type: 'text',
          readonly: true,
          value: '',
          autofill: true,
          required: false,
          options: ''
        })
      })
    },
    addField () {
      this.form.identificationFields.push({
        selected: true,
        default: false,
        label: '',
        name: '',
        type: '',
        readonly: false,
        value: '',
        autofill: false,
        required: false,
        options: ''
      })
      this.field.index = this.form.identificationFields.length - 1
    },
    editOptions () {
      if (this.fieldTypesWithOptions.includes(this.form.identificationFields[this.field.index].type)) {
        this.editField(this.field.index)
      } else {
        this.form.identificationFields[this.field.index].options = ''
      }
    },
    editField (index) {
      this.field.index = index
      this.field.options = this.form.identificationFields[index].options
      this.showEditFieldOptions = true
    },
    saveOptions () {
      const { index, options } = this.field
      this.form.identificationFields[index].options = options
      this.showEditFieldOptions = false
    },
    removeField (index) {
      this.form.identificationFields.splice(index, 1)
    },
    generateSchema () {
      this.widgetData = {}
      this.widgetData.companyName = this.form.companyName
      this.widgetData.companyLogo = this.form.companyLogo
      this.widgetData.companyPrimaryColour = this.form.companyPrimaryColour
      this.widgetData.companySecondaryColour = this.form.companySecondaryColour
      this.widgetData.signupMfa = this.form.signupMfa
      this.widgetData.loginMfa = this.form.loginMfa
      this.widgetData.onboarding = this.form.onboarding
      this.widgetData.third_party_access = this.form.third_party_access
      this.widgetData.schema = {
        signup: [],
        login: []
      }
      this.form.identificationFields.forEach(field => {
        if (!field.autofill) {
          this.widgetData.schema.signup.push(field)
        }
      })
      this.form.identificationFieldsCompulsory.forEach(field => {
        this.widgetData.schema.signup.push(field)
        this.widgetData.schema.login.push(field)
      })
    },
    preview () {
      this.generateSchema()
      this.showWidgetPreview = true
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
.authx-form {
  padding: 40px !important;

  .authx-form-section {
    margin-bottom: 40px;
    flex-wrap: wrap;
  }
}

.compulsory_fields {
  background: rgba(20, 8, 5, 0.04);
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;

  h6 {
    margin-bottom: 10px;
    font-size: 0.875rem;
  }

  p {
    font-size: 0.875rem;
  }
}

.field__add {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 10px;

  p {
    cursor: pointer;
    color: var(--primary);
    font-size: 0.875rem;
    line-height: 1;
  }

  i {
    margin-right: 5px;
    color: var(--primary);
  }
}

.field__action {
  display: flex;
  justify-content: flex-end;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 22px;
    width: 22px;
    border-radius: 1000px;
    background: rgba(20, 8, 5, 0.06);

    i {
      font-weight: bold;
      font-size: 14px;
    }
  }

  div:last-child {
    margin-left: 14px;
  }
}

.field__remove {
  cursor: pointer;
}
</style>
