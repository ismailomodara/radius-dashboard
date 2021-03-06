<template>
  <card>
    <template slot="header">
      Total Requests
    </template>
    <template slot="content">
      <line-chart :data="requestChart.data" :labels="requestChart.labels" />
    </template>
  </card>
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
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const data = [2, 1.5, 1.2, 1.4, 1, 1.85, 1.6, 1.1, 0.8, 1.9, 2, 1.45]

      return { data, labels }
    }
  }
}
</script>

<style></style>
