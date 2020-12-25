<template>
  <el-dialog :visible.sync="shouldShow" @close="closeEvent" width="30%">
    <template slot="title">
      <h6 class="title">Verification for {{ verification.type }}</h6>
    </template>
    <el-row type="flex" class="mb-2">
      <el-col :md="10">
        <p>User ID for</p>
        <span>{{ verification.id }}</span>
      </el-col>
      <el-col :md="14">
        <p>Date</p>
        <span>{{ verification.date }}</span>
      </el-col>
    </el-row>
    <el-row type="flex" class="mb-2">
      <el-col :span="24">
        <p>Full name</p>
        <span>{{ verification.name }}</span>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="24">
        <p>Address</p>
        <span>{{ verification.address }}</span>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
export default {
  name: 'Verification',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    verification: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  },
  computed: {
    shouldShow: {
      get () {
        return this.show
      },
      set (value) {
        this.$emit('update:show', value)
      }
    }
  },
  methods: {
    closeEvent () {
      this.shouldShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  color: #140508;
  font-weight: 500;
}

p {
  font-size: 0.875rem;
  margin-bottom: 5px;
}

span {
  font-size: 0.875rem;
  font-weight: 500;
  color: #140508;
}

.el-tag {
  font-size: 0.75rem;
}
</style>
