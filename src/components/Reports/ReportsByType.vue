<template>
  <card>
    <template slot="header">
      Requests By Identity Type
    </template>
    <template slot="content">
      <pie-chart v-if="dataAvailable" :data="requestChart.data" :labels="requestChart.labels" />
    </template>
  </card>
</template>

<script>
import PieChart from '@/components/Chart/PieChart'

export default {
  name: 'RequestsByTypeChart',
  components: {
    PieChart
  },
  data () {
    return {
      labels: [],
      data: []
    }
  },
  computed: {
    requestChart () {
      const labels = this.labels
      const data = this.data

      return { data, labels }
    },

    dataAvailable () {
      return this.labels.length && this.data.length
    }
  },
  methods: {},
  created () {}
}
</script>

<style></style>
