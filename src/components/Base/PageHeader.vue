<template>
  <el-row type="flex">
    <el-col :span="24" class="is-flex is-align-center">
      <div class="rd-back" @click="back">
        <i class="rd-icon--arrow-left"></i>
      </div>
      <div>
        <h6>{{ heading }}</h6>
        <p>{{ subheading }}</p>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    heading: {
      type: String,
      required: true
    },
    subheading: {
      type: String,
      required: true
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
.rd-back {
  padding: 20px 20px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;

  i {
    color: #140508;
    font-weight: 600;
    font-size: 1.2rem;
  }
}
</style>
