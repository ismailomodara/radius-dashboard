<template>
  <div>
    <div class="rd-page--section">
      <page-header
        heading="Create new API Key"
        subheading="Create new API Key for access"
      />
    </div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <api-key-form />
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import ApiKeyForm from '@/components/Settings/ApiKeyForm'
export default {
  name: 'APICreate',
  components: { ApiKeyForm },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
