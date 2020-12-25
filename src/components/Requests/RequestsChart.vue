<template>
  <el-row type="flex">
    <el-col :span="24">
      <card>
        <template slot="header">
          Number of Requests (This week)
        </template>
        <template slot="content">
          <line-chart :data="requestChart.data" :labels="requestChart.labels" />
        </template>
      </card>
    </el-col>
  </el-row>
</template>

<script>
import LineChart from '@/components/Chart/LineChart'

export default {
  name: 'RequestsChart',
  components: {
    LineChart
  },
  data () {
    return {}
  },
  computed: {
    requestChart () {
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      const data = [10, 15, 12, 8, 20, 18, 12]

      return { data, labels }
    }
  }
}
</script>

<style></style>
