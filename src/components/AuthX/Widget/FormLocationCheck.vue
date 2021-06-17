<template>
  <el-row type="flex">
    <el-col :span="24">
      <div class="location">
        <h6>Location check.</h6>
        <el-switch
          v-model="check"
          active-text="Allow application to read your location"
          :active-value="true"
          inactive-text=""
          :inactive-value="false" />
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'FormLocationCheck',
  data () {
    return {
      check: false
    }
  }
}
</script>

<style lang="scss" scoped>
.location {
  text-align: center;

  h6 {
    margin-bottom: 20px;
  }
}
</style>
