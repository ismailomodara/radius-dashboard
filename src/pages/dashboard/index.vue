<template>
  <div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <h6>Dashboard</h6>
          <p>Here is a summary of activities in your account.</p>
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="40">
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
          <summary-card label="Wallet Balance" :value="formatPrice(walletBalance)">
            <el-button type="success" @click="showFundWallet = true">Fund</el-button>
          </summary-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
          <summary-card label="Total Requests" :value="totalRequests" />
        </el-col>
      </el-row>
    </div>

    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="20">
        <el-col :md="12" :lg="12">
          <reports-by-type />
        </el-col>
      </el-row>
    </div>

    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="20">
        <el-col :md="24" :lg="24">
          <reports-chart-all />
        </el-col>
      </el-row>
    </div>

    <div class="rd-page--section">
      <reports-recent />
    </div>
    <fund-wallet :show.sync="showFundWallet" />
  </div>
</template>

<script>
import ReportsByType from '@/components/Reports/ReportsByType'
import ReportsChartAll from '@/components/Reports/ReportsChartAll'
import ReportsRecent from '@/components/Reports/ReportsRecent'
import FundWallet from '@/components/Wallet/Fund'

export default {
  name: 'Dashboard',
  components: {
    ReportsByType,
    ReportsChartAll,
    ReportsRecent,
    FundWallet
  },
  data () {
    return {
      loading: false,
      walletBalance: 150500,
      totalRequests: 1850,
      users: 1850,
      signups: 1850,
      ids: 1850,
      auth: 1850,
      showFundWallet: false
    }
  },
  computed: {},
  methods: {
    verify () {
      this.$router.push({ name: 'dashboard.verify' })
    },
    fundWallet (amount) {
      this.walletBalance = this.walletBalance + amount
    }
  }
}
</script>

<style></style>
