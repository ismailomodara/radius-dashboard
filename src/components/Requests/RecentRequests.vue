<template>
  <div>
    <el-row type="flex">
      <el-col :span="24">
        <card>
          <template slot="header">
            <div class="is-flex is-align-center is-justify-end">
              <el-button type="text" size="small">Export CSV</el-button>
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
                  <p>{{ scope.row.detail }}</p>
                </template>
              </el-table-column>
              <el-table-column width="80">
                <template slot-scope="scope">
                  <el-dropdown class="more" @command="command">
                    <span>
                      <i class="rd-icon--more-horizontal"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item
                        icon="rd-icon--info"
                        :command="{ action: 'info', request: scope.row }">
                        More info</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
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
    <request :show.sync="showRequest" :request="request" />
  </div>
</template>

<script>
import Request from '@/components/Requests/Request'
export default {
  name: 'RecentRequests',
  components: { Request },
  data () {
    return {
      loading: false,
      search: '',
      page: 1,
      pageData: {
        from: 1,
        to: 5,
        total: 5,
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
          }
        ]
      },
      showRequest: false,
      request: {}
    }
  },
  methods: {
    command (command) {
      this.request = { ...command.request }
      if (command.action === 'info') {
        this.showRequest = true
      } else {
        //
      }
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
