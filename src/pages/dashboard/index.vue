<template>
  <div>
    <div class="rd-page--section">
      <el-alert
        type="success"
        class="el-alert--purple"
        :closable="false">
        <template slot="title">
          <div class="el-alert--content">
            <h6>Verify Account!</h6>
            <p>You need to verify your account, to enable all functionalities. <span>Verify now.</span></p>
          </div>
        </template>
      </el-alert>
    </div>
    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="40">
        <el-col v-for="(data, i) in summary" :key="i" :xs="24" :sm="12" :md="12" :lg="12">
          <summary-card :label="data.label" :value="data.value" />
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="40">
        <el-col v-for="(request, i) in requests" :key="i" :xs="24" :sm="12" :md="8" :lg="8">
          <summary-card :label="request.label" :value="request.value" />
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <card :header="false">
            <template slot="content">
              <bar-chart />
            </template>
          </card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import BarChart from '../../components/Chart/BarChart'

export default {
  name: 'Dashboard',
  components: {
    BarChart
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    dashboard () {
      return this.$store.getters.dashboard
    },
    summary () {
      return [
        {
          label: 'Wallet Balance',
          value: this.formatFigure(15725)
        },
        {
          label: 'Total Requests',
          value: 42
        }
      ]
    },
    requests () {
      return [
        {
          label: 'Successful Requests',
          value: 10
        },
        {
          label: 'Pending Requests',
          value: 5
        },
        {
          label: 'Failed Requests',
          value: 2
        }
      ]
    }
  }
}
</script>

<style></style>
