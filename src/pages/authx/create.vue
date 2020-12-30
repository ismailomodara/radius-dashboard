<template>
  <div>
    <div class="rd-page--section">
      <page-header
        heading="Create new AuthX"
        subheading="Create a secure & beautiful login pages to easily authenticate and onboard your users."
      />
    </div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <auth-x-form />
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import AuthXForm from '@/components/AuthX/AuthXForm'
export default {
  name: 'AuthXCreate',
  components: { AuthXForm },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
