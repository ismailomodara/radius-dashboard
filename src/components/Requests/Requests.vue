<template>
  <div>
    <el-row type="flex">
      <el-col :span="24">
        <card>
          <template slot="header">
            <h5>Reports</h5>
            <div class="is-flex is-align-center is-justify-end">
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
            <el-table :data="pageData.data" empty-text="No Requests(s)">
              <el-table-column prop="index" width="100">
                <template slot="header">
                <span class="rd-table--header">
                  ID
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.id }}</p>
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
              <el-table-column prop="service">
                <template slot="header">
                <span class="rd-table--header">
                  Service
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.service }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="status">
                <template slot="header">
                <span class="rd-table--header">
                  Status
                </span>
                </template>
                <template slot-scope="scope">
                  <el-tag :type="setType(scope.row.status)">{{ formatText(scope.row.status) }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="detail">
                <template slot="header">
                <span class="rd-table--header">
                  Detail
                </span>
                </template>
                <template slot-scope="scope">
                  <p @click="showReport(scope.row.id)" class="text-muted text-underline">See details</p>
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
            date: '24 Dec 2020',
            service: 'BVN',
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '002',
            date: '24 Dec 2020',
            service: 'CAC',
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '003',
            date: '24 Dec 2020',
            service: 'AUTH',
            status: 'pending',
            detail: 'Detail'
          },
          {
            id: '004',
            date: '24 Dec 2020',
            service: 'AUTH',
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '005',
            date: '24 Dec 2020',
            service: 'NIN',
            status: 'failed',
            detail: 'Detail'
          },
          {
            id: '006',
            date: '24 Dec 2020',
            service: 'BVN',
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '007',
            date: '24 Dec 2020',
            service: 'CAC',
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '008',
            date: '24 Dec 2020',
            service: 'AUTH',
            status: 'pending',
            detail: 'Detail'
          },
          {
            id: '009',
            date: '24 Dec 2020',
            service: 'AUTH',
            status: 'successful',
            detail: 'Detail'
          },
          {
            id: '010',
            date: '24 Dec 2020',
            service: 'NIN',
            status: 'failed',
            detail: 'Detail'
          }
        ]
      },
      showRequest: false,
      request: {}
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
