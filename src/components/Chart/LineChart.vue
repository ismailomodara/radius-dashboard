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
    fontSize: {
      type: Number,
      default: 16
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
            borderColor: this.color,
            borderWidth: 2,
            data: this.data,
            tension: 0.1
          }
        ]
      }
    },

    chartOptions () {
      return {
        responsive: true,
        legend: false,
        maintainAspectRatio: false,
        plugins: {
          datalabels: {
            labels: {
              title: {
                color: '#36AFA4',
                display: 'auto',
                align: 'top'
              }
            },
            font: {
              size: this.fontSize
            },
            formatter: (value) => {
              return value >= 1000 ? `${Math.round(value/1000)}k` : value;
            }
          }
        },
        tooltips: {
          callbacks: {
            label (tooltipItem, data) {
              let label = data.datasets[tooltipItem.datasetIndex].label || '';
              let value;
              if (tooltipItem.datasetIndex === 1) {
                value = tooltipItem.yLabel + data.datasets[0].data[tooltipItem.index];
              } else {
                value = tooltipItem.value;
              }
              if (label) {
                label += ': ';
              }
              value = value >= 1000 ? `${Math.round(value/1000)}k` : value;
              label += value;
              return label;
            }
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
