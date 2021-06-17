<template>
  <el-row type="flex">
    <el-col :span="24">
      <div class="liveness">
        <h6>Liveness check.</h6>
        <div class="liveness__container"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'FormLivenessCheck',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.liveness {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h6 {
    margin-bottom: 20px;
  }

  &__container {
    height: 240px;
    width: 240px;
    border: 3px dashed #d05169;
    border-radius: 8px;
    background: #ccc;
  }
}
</style>
