<template>
  <line-chart-instance
    :chart-data.sync="chartData"
    :options.sync="chartOptions"
    :height="height"
  />
</template>

<script>
import LineChartInstance from './line-chart'

export default {
  name: 'LineChart',
  props: {
    data: {
      type: Array,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    color: {
      type: String,
      default: '#D05169'
    },
    height: {
      type: Number,
      default: 300
    }
  },
  components: {
    LineChartInstance
  },
  computed: {
    chartData () {
      return {
        labels: this.labels,
        datasets: [
          {
            backgroundColor: `${this.color}15`,
            borderColor: this.color,
            borderWidth: 2,
            data: this.data
          }
        ]
      }
    },
    setStep () {
      return (
        Math.round(Math.min(...this.chartData.datasets[0].data))
      )
    },
    setMax () {
      return (
        Math.round(Math.max(...this.chartData.datasets[0].data)) +
        this.setStep
      )
    },
    chartOptions () {
      return {
        responsive: true,
        legend: false,
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0
          },
          point: {
            radius: 0
          }
        },
        scales: {
          xAxes: [
            {
              display: true,
              gridLines: {
                color: '#57645E10'
              },
              stacked: true
            }
          ],
          yAxes: [
            {
              display: true,
              gridLines: {
                display: false,
                drawBorder: false
              },
              stacked: true,
              ticks: {
                beginAtZero: true,
                stepSize: this.setStep,
                max: this.setMax
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
              return `${label}k`
            }
          }
        },
        layout: {
          padding: {
            top: 20
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
