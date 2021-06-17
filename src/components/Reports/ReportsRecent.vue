<template>
  <div>
    <el-row type="flex">
      <el-col :span="24">
        <card>
          <template slot="header">
            <div class="is-flex is-align-center is-justify-end">
              <p>Recent Billings</p>
            </div>
          </template>
          <template slot="content">
            <el-table :data="pageData" :empty-text="noDataMessage">
              <el-table-column prop="date">
                <template slot="header">
                  <span class="rd-table--header">
                    Date
                  </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.done_at }}</p>
                </template>
              </el-table-column>

              <el-table-column prop="is_credit">
                <template slot="header">
                  <span class="rd-table--header">
                    Transaction Type
                  </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.is_credit ? 'Credit' : 'Debit' }}</p>
                </template>
              </el-table-column>

              <el-table-column prop="activity">
                <template slot="header">
                <span class="rd-table--header">
                  Activity
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.target_type_object && scope.row.target_type_object.name }}</p>
                </template>
              </el-table-column>

              <el-table-column prop="charge">
                <template slot="header">
                <span class="rd-table--header">
                  Charge
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ formatPrice(scope.row.amount) }}</p>
                </template>
              </el-table-column>

              <el-table-column prop="balance">
                <template slot="header">
                <span class="rd-table--header">
                  Balance
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ formatPrice(scope.row.balance) }}</p>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'RecentRequests',

  data () {
    return {
      pageData: [],
      showRequest: false,
      noDataMessage: 'No bills data available'
    }
  }
}
</script>

<style lang="scss" scoped>
.rd-stack {
  p:last-child {
    font-size: 0.875rem;
    opacity: 0.8;
    margin-top: 5px;
  }
}
</style>
