<template>
  <div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <h6>Verified IDs</h6>
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
                placeholder="Search for ID"
                suffix-icon="rd-icon--search"
                class="search mr-1"
                :disabled="!pageData.data.length" />
              <el-button type="primary" size="medium" @click="verifyId">Verify New Id</el-button>
            </div>
          </template>
          <template slot="content">
            <el-table :data="pageData.data" empty-text="No Report(s) added">
              <el-table-column prop="type" width="140">
                <template slot="header">
                <span class="rd-table--header">
                  Type
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.type }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="id">
                <template slot="header">
                  <span class="rd-table--header">
                    Id
                  </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.id }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="date">
                <template slot="header">
                <span class="rd-table--header">
                  Date
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.date }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="name">
                <template slot="header">
                <span class="rd-table--header">
                  Name
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.name }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="address">
                <template slot="header">
                <span class="rd-table--header">
                  Address
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.address }}</p>
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
                        :command="{ action: 'info', verification: scope.row }">
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
    <verification :show.sync="showVerificationDetails" :verification="verification" />
  </div>
</template>

<script>
import Verification from '@/components/Verification/Verification'
export default {
  name: 'Verifications',
  components: { Verification },
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
            type: 'NIN',
            id: 4329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          },
          {
            type: 'CAC',
            id: 9329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          },
          {
            type: 'Driver\'s License',
            id: 9329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          },
          {
            type: 'BVN',
            id: 9329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          },
          {
            type: 'Passport Id',
            id: 9329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          },
          {
            type: 'NIN',
            id: 4329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          },
          {
            type: 'CAC',
            id: 9329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          },
          {
            type: 'Driver\'s License',
            id: 9329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          },
          {
            type: 'BVN',
            id: 9329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          },
          {
            type: 'Passport Id',
            id: 9329918348,
            date: '24 Dec, 2020',
            name: 'Sulaimon Saliu',
            address: 'Jacob Mews Estate, Alagomeji, Yaba.'
          }
        ]
      },
      showVerificationDetails: false,
      verification: {}
    }
  },
  methods: {
    verifyId () {
      this.$router.push({ name: 'verifications.verify' })
    },
    command (command) {
      this.verification = { ...command.verification }
      if (command.action === 'info') {
        this.showVerificationDetails = true
      } else {
        //
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
