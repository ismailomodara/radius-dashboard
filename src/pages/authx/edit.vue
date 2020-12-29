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
          <auth-x-form />
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
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
