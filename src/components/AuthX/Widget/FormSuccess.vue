<template>
  <el-row type="flex">
    <el-col :span="24">
      <div class="successful">
        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#D05169" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <p>{{ message }}</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'FormSuccess',
  props: {
    message: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.successful {
  text-align: center;

  svg {
    height: 72px;
    width: auto;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
  }
}
</style>
