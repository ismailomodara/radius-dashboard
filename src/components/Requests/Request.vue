<template>
  <el-dialog :visible.sync="shouldShow" @close="closeEvent" width="30%">
    <template slot="title">
      <h6 class="title">Request #{{ request.id }}</h6>
    </template>
    <el-row type="flex" class="mb-2">
      <el-col :md="10">
        <p>Request for</p>
        <span>{{ request.service }}</span>
      </el-col>
      <el-col :md="14">
        <p>Date of Request</p>
        <span>{{ request.date }}</span>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :md="10">
        <p>Status</p>
        <el-tag :type="setType(request.status)">{{ formatText(request.status) }}</el-tag>
      </el-col>
      <el-col :md="14">
        <p>Details</p>
        <span>{{ formatText(request.detail) }}</span>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
export default {
  name: 'Request',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    request: {
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
  font-weight: 600;
}

p {
  font-size: 0.875rem;
  margin-bottom: 5px;
}

span {
  font-size: 0.875rem;
  font-weight: 600;
  color: #140508;
}

.el-tag {
  font-size: 0.75rem;
}
</style>
