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
      <el-row type="flex" class="flex-wrap" :gutter="30">
        <el-col :xs="24" :sm="12" :md="12" :lg="12">
          <summary-card label="Wallet Balance" :value="formatPrice(walletBalance)">
            <el-button type="success" @click="showFundWallet = true">Fund</el-button>
          </summary-card>
        </el-col>
        <el-col :xs="24" :sm="6" :md="6" :lg="6">
          <summary-card label="Users" :value="formatFigureToK(users)" />
        </el-col>
        <el-col :xs="24" :sm="6" :md="6" :lg="6">
          <summary-card label="New Signups" :value="formatFigureToK(signups)" />
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="30">
        <el-col :xs="24" :sm="8" :md="8" :lg="8">
          <summary-card label="Total Request" :value="formatFigureToK(totalRequests)" />
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8">
          <summary-card label="ID Verification" :value="formatFigureToK(ids)" />
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8">
          <summary-card label="Authentication" :value="formatFigureToK(auth)" />
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="20">
        <el-col :md="24" :lg="24">
          <requests-chart />
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="30">
        <el-col :lg="12">
          <requests-chart-successful />
        </el-col>
        <el-col :lg="12">
          <requests-chart-failed />
        </el-col>
      </el-row>
    </div>
    <fund-wallet :show.sync="showFundWallet" @success="fundWallet" />
  </div>
</template>

<script>
import FundWallet from '@/components/Wallet/Fund'
import RequestsChart from '@/components/Requests/RequestsChartAll'
import RequestsChartSuccessful from '@/components/Requests/RequestsChartSuccessful'
import RequestsChartFailed from '@/components/Requests/RequestsChartFailed'

export default {
  name: 'Dashboard',
  components: {
    RequestsChartFailed,
    RequestsChartSuccessful,
    FundWallet,
    RequestsChart
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
