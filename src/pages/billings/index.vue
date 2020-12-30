<template>
  <div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <h6>Billings</h6>
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
            <el-table :data="pageData.data" empty-text="No Requests(s)">
              <el-table-column prop="index" width="100">
                <template slot="header">
                <span class="rd-table--header">
                  <i class="rd-icon--arrow-down text-muted"></i>
                </span>
                </template>
                <template slot-scope="scope">
                  <span v-if="scope.row.tx === 'credit'" class="rd-transaction credit">
                    <i class="rd-icon--arrow-down"></i>
                  </span>
                  <span v-else class="rd-transaction debit">
                    <i class="rd-icon--arrow-up"></i>
                  </span>
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
              <el-table-column prop="activity">
                <template slot="header">
                  <span class="rd-table--header">
                    Activity
                  </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ formatText(scope.row.activity) }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="service">
                <template slot="header">
                <span class="rd-table--header">
                  Detail
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.detail }}</p>
                </template>
              </el-table-column>
              <el-table-column prop="charge">
                <template slot="header">
                <span class="rd-table--header">
                  Charge
                </span>
                </template>
                <template slot-scope="scope">
                  <p>{{ scope.row.tx === 'debit' ? '-' : '' }} {{ formatPrice(scope.row.charge) }}</p>
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
        to: 8,
        total: 8,
        data: [
          {
            id: 1,
            tx: 'debit',
            date: '24 Dec 2020',
            activity: 'charge',
            detail: 'Charge for VBN request: 222***234',
            charge: 10,
            balance: 150075
          },
          {
            id: 2,
            tx: 'credit',
            date: '24 Dec 2020',
            activity: 'wallet',
            detail: 'Funded wallet',
            charge: 10000,
            balance: 160075
          },
          {
            id: 3,
            tx: 'debit',
            date: '24 Dec 2020',
            activity: 'charge',
            detail: 'Charge for VBN request: 222***234',
            charge: 10,
            balance: 150075
          },
          {
            id: 4,
            tx: 'credit',
            date: '24 Dec 2020',
            activity: 'wallet',
            detail: 'Funded wallet',
            charge: 10000,
            balance: 160075
          },
          {
            id: 5,
            tx: 'debit',
            date: '24 Dec 2020',
            activity: 'charge',
            detail: 'Charge for VBN request: 222***234',
            charge: 10,
            balance: 150075
          },
          {
            id: 6,
            tx: 'credit',
            date: '24 Dec 2020',
            activity: 'wallet',
            detail: 'Funded wallet',
            charge: 10000,
            balance: 160075
          },
          {
            id: 7,
            tx: 'debit',
            date: '24 Dec 2020',
            activity: 'charge',
            detail: 'Charge for VBN request: 222***234',
            charge: 10,
            balance: 150075
          },
          {
            id: 8,
            tx: 'credit',
            date: '24 Dec 2020',
            activity: 'wallet',
            detail: 'Funded wallet',
            charge: 10000,
            balance: 160075
          }
        ]
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.rd-transaction {
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.credit {
    background: #36AFA415;
    color: #36AFA4;
  }

  &.debit {
    background: #D0516915;
    color: #D05169;
  }
}
</style>
