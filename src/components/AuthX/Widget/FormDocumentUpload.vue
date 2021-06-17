<template>
  <el-row type="flex">
    <el-col :span="24">
      <div class="document">
        <h6>Upload [documentName] here.</h6>
        <file />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import File from '@/components/AuthX/Widget/FormInputs/File'

export default {
  name: 'FormDocumentUpload',
  components: { File },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.document {

  h6 {
    margin-bottom: 20px;
  }
}
</style>
