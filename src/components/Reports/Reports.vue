<template>
  <div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <h6>Reports</h6>
        </el-col>
      </el-row>
    </div>
    <el-row type="flex">
      <el-col :span="24">
        <card>
          <template slot="header">
            <div class="w-100 is-flex is-align-center is-justify-between">
              <el-input
                v-model="search"
                type="text"
                placeholder="Search"
                suffix-icon="rd-icon--search"
                class="search mr-1"
                :disabled="!pageData.data.length" />
              <el-button type="primary" size="medium">Export CSV</el-button>
            </div>
          </template>
          <template slot="content">
            <el-table :data="pageData.data" empty-text="No Report">
              <el-table-column prop="type" width="160">
                <template slot="header">
                <span class="rd-table--header">
                  Report Type
                </span>
                </template>
                <template slot-scope="scope">
                  <div class="rd-stack">
                    <p>{{ scope.row.type.toUpperCase() }}</p>
                    <span v-if="scope.row.service">{{ scope.row.service }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="status" width="200">
                <template slot="header">
                <span class="rd-table--header">
                  Status
                </span>
                </template>
                <template slot-scope="scope">
                  <el-tag :type="setType(scope.row.status)">{{ formatText(scope.row.status) }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="date" width="200">
                <template slot="header">
                  <span class="rd-table--header">
                    Date
                  </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.date }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="time">
                <template slot="header">
                  <span class="rd-table--header">
                    Time
                  </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.time }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="detail">
                <template slot="header">
                <span class="rd-table--header">
                  Detail
                </span>
                </template>
                <template slot-scope="scope">
                  <p @click="showReport(scope.row.id)" class="text-muted text-underline text-cursor">See details</p>
                </template>
              </el-table-column>
            </el-table>
            <pagination
              v-if="pageData.data.length"
              :from="pageData.from"
              :to="pageData.to"
              :total="pageData.total"
              :current-page.sync="page"
            />
          </template>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Requests',
  data () {
    return {
      loading: false,
      search: '',
      page: 1,
      pageData: {
        from: 1,
        to: 10,
        total: 10,
        data: [
          {
            id: '001',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'login',
            service: null,
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '002',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'signup',
            service: 'CAC',
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '003',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'signup',
            service: 'AUTH',
            status: 'pending',
            detail: 'Detail'
          },
          {
            id: '004',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'signup',
            service: 'AUTH',
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '005',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'signup',
            service: 'NIN',
            status: 'failed',
            detail: 'Detail'
          },
          {
            id: '006',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'login',
            service: null,
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '007',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'login',
            service: null,
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '008',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'signup',
            service: 'AUTH',
            status: 'pending',
            detail: 'Detail'
          },
          {
            id: '009',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'signup',
            service: 'AUTH',
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '010',
            date: '24th Dec, 2020',
            time: '03:42 PM',
            type: 'login',
            service: null,
            status: 'failed',
            detail: 'Detail'
          }
        ]
      },
      showRequest: false,
      report: {}
    }
  },
  methods: {
    showReport (id) {
      this.$router.push({ name: 'reports.report', params: { id } })
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
