<template>
  <card>
    <template slot="header">
      <div class="w-10 is-flex is-align-center is-justify-end">
        <p>Total Requests</p>
      </div>
    </template>
    <template slot="content">
      <line-chart v-if="dataAvailable" :data="requestChart.data" :labels="requestChart.labels" />
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
    return {
      labels: [],
      data: [],
      startDate: '',
      endDate: ''
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
  }
}
</script>

<style></style>
