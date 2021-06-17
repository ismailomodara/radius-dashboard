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
      const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      const data = [10, 15, 12, 8, 20, 18, 12]

      return { data, labels }
    }
  }
}
</script>

<style></style>
