<template>
  <el-row type="flex">
    <el-col :span="24">
      <card>
        <template slot="header">
          <div class="w-100 is-flex is-align-center is-justify-end">
            <el-button type="primary" size="medium" @click="create">Add New Key</el-button>
          </div>
        </template>
        <template slot="content">
          <el-table :data="pageData.data" empty-text="No API key(s)">
            <el-table-column prop="type" width="140">
              <template slot="header">
                <span class="rd-table--header">
                  Name
                </span>
              </template>
              <template slot-scope="scope">
                <p>{{ scope.row.name }}</p>
              </template>
            </el-table-column>
            <el-table-column prop="apiKeyId">
              <template slot="header">
                <span class="rd-table--header">
                  API Key Id
                </span>
              </template>
              <template slot-scope="scope">
                <p>{{ scope.row.apiKeyId }}</p>
              </template>
            </el-table-column>
            <el-table-column prop="type">
              <template slot="header">
                <span class="rd-table--header">
                  Environment
                </span>
              </template>
              <template slot-scope="scope">
                <p>{{ scope.row.env === 'dev' ? 'Development' : 'Production' }}</p>
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
                      icon="rd-icon--edit"
                      :command="{ action: 'edit', api: scope.row }">
                      Edit</el-dropdown-item>
                    <el-dropdown-item
                      icon="rd-icon--trash"
                      :command="{ action: 'delete', api: scope.row }">
                      Delete</el-dropdown-item>
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
</template>

<script>
export default {
  name: 'ApiKeysIndex',
  data () {
    return {
      loading: false,
      search: '',
      page: 1,
      pageData: {
        from: 1,
        to: 1,
        total: 1,
        data: [
          {
            id: 1,
            name: 'ETax',
            apiKeyId: '8192nfs9uf01i2-4329429u523',
            env: 'dev'
          }
        ]
      },
      showVerificationDetails: false,
      api: {}
    }
  },
  methods: {
    create () {
      this.$router.push({ name: 'settings.api.create' })
    },
    command (command) {
      this.api = { ...command.api }
      if (command.action === 'edit') {
        this.$router.push({ name: 'settings.api.edit', params: { id: command.api.id } })
      } else {
        this.$message.success('Key deleted')
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
