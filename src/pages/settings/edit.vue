<template>
  <div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="20" class="mx-auto">
          <h6>Edit API Key</h6>
        </el-col>
      </el-row>
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
  name: 'APIEdit',
  components: { ApiKeyForm },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
