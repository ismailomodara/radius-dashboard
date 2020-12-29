<template>
  <div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <h6>Edit AuthX</h6>
          <p>Make changes to your secure & beautiful login pages to easily authenticate and onboard your users.</p>
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <auth-x-form action="edit" :authx="form" />
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import AuthXForm from '@/components/AuthX/AuthXForm'
export default {
  name: 'AuthXEdit',
  components: { AuthXForm },
  data () {
    return {
      form: {
        companyName: 'Radius',
        mfa: true,
        companyLogo: 'https://radius-dashboard.netlify.app/favicon.png',
        ids: ['Bank Verification Number', 'NIN/Phone Number'],
        extraFields: [
          {
            name: 'Address',
            type: 'textarea',
            value: '',
            options: ''
          },
          {
            name: 'Date of birth',
            type: 'datepicker',
            value: '',
            options: ''
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
