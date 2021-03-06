<template>
  <bar-chart-instance
    :chart-data.sync="chartData"
    :options.sync="chartOptions"
    :height="height"
  />
</template>

<script>
import BarChartInstance from './bar-chart'

export default {
  name: 'BarChart',
  props: {
    height: {
      type: Number,
      default: 300
    },
    data: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    }
  },
  components: {
    BarChartInstance
  },
  data () {
    return {}
  },
  computed: {
    chartData () {
      return {
        labels: this.labels,
        datasets: [
          {
            label: '',
            backgroundColor: 'rgb(0, 0, 0)',
            barThickness: 6,
            maxBarThickness: 8,
            minBarLength: 2,
            data: this.data
          }
        ]
      }
    },
    chartOptions () {
      return {
        responsive: true,
        legend: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false
              },
              stacked: true
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false
              },
              stacked: true,
              ticks: {
                beginAtZero: true,
                stepSize: Math.min(...this.data)
              }
            }
          ]
        },
        tooltips: {
          callbacks: {
            label (tooltipItem, data) {
              let label = data.datasets[tooltipItem.datasetIndex].label || ''
              let value
              if (tooltipItem.datasetIndex === 1) {
                value =
                  tooltipItem.yLabel + data.datasets[0].data[tooltipItem.index]
              } else {
                value = tooltipItem.value
              }
              if (label) {
                label += ': '
              }
              label += value
              return label
            }
          }
        },
        layout: {
          padding: {
            top: 10
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
