<template>
  <pie-chart-instance
    :chart-data.sync="chartData"
    :options.sync="chartOptions"
    :height="height"
  />
</template>

<script>
import PieChartInstance from './pie-chart'

export default {
  name: 'PieChart',

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
      default: '#fff'
    },
    height: {
      type: Number,
      default: 350
    },
    fontSize: {
      type: Number,
      default: 16
    },
    chartColors: {
      type: Array,
      default: () => {
        return [
          '#36afa4', '#e6a23c', '#f56c6c', '#909399', '#a0cfff'
        ]
      }
    }
  },

  components: {
    PieChartInstance
  },

  computed: {
    chartData () {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'Data One',
            backgroundColor: this.chartColors,
            borderColor: this.color,
            borderWidth: 1,
            data: this.data
          }
        ]
      }
    },

    chartOptions () {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            color: this.color,
            align: 'center',
            font: {
              size: this.fontSize
            },
            formatter: (value, context) => {
              const data = context.dataset && context.dataset.data
              const total = this.sumOfElements(data)
              return Math.round(value / total * 100) + '%'
            }
          }
        },
        tooltips: {
          callbacks: {
            label (tooltipItem, data) {
              return data.labels[tooltipItem.index]
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
