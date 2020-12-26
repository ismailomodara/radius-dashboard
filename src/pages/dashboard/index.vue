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
            <p>To keep us all safe, wee need to verify your company details. <span @click="verify">Verify now.</span></p>
          </div>
        </template>
      </el-alert>
    </div>
    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="40">
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
          <summary-card label="Wallet Balance" :value="formatPrice(walletBalance)">
            <el-button type="success" @click="showFundWallet = true">Fund</el-button>
          </summary-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
          <summary-card :label="requests[0].label" :value="requests[0].value" />
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="40">
        <el-col v-for="(request, i) in requests.slice(1)" :key="i" :xs="24" :sm="12" :md="8" :lg="8">
          <summary-card :label="request.label" :value="request.value" />
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <requests-chart />
    </div>
    <div class="rd-page--section">
      <recent-requests />
    </div>
    <fund-wallet :show.sync="showFundWallet" />
  </div>
</template>

<script>
import RequestsChart from '@/components/Requests/RequestsChart'
import RecentRequests from '@/components/Requests/RecentRequests'
import FundWallet from '@/components/Wallet/Fund'

export default {
  name: 'Dashboard',
  components: {
    FundWallet,
    RecentRequests,
    RequestsChart
  },
  data () {
    return {
      loading: false,
      walletBalance: 150500,
      showFundWallet: false
    }
  },
  computed: {
    requests () {
      return [
        {
          label: 'Total Requests',
          value: this.formatFigure(3700)
        },
        {
          label: 'Successful Requests',
          value: this.formatFigure(2750)
        },
        {
          label: 'Pending Requests',
          value: this.formatFigure(200)
        },
        {
          label: 'Failed Requests',
          value: this.formatFigure(700)
        }
      ]
    }
  },
  methods: {
    verify () {
      this.$router.push({ name: 'dashboard.verify' })
    }
  }
}
</script>

<style></style>
