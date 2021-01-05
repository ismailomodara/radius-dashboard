<template>
  <div>
    <div class="rd-page--section">
      <page-header
        heading="Edit API Key"
        subheading="Make changes to your existing API Key for access"
      />
    </div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <api-key-form action="edit" />
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import ApiKeyForm from '@/components/Settings/ApiKeyForm'
export default {
  name: 'APIEdit',
  components: { ApiKeyForm },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
