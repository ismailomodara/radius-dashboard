<template>
  <card>
    <template slot="header">
      Failed Requests
    </template>
    <template slot="content">
      <bar-chart :data="requestChart.data" :labels="requestChart.labels" :height="250" />
    </template>
  </card>
</template>

<script>
import BarChart from '@/components/Chart/BarChart'

export default {
  name: 'RequestsChartFailed',
  components: {
    BarChart
  },
  data () {
    return {}
  },
  computed: {
    requestChart () {
      const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      const data = [10, 15, 12, 8, 20, 18, 12, 10, 15, 12, 8, 20]

      return { data, labels }
    }
  }
}
</script>

<style></style>
