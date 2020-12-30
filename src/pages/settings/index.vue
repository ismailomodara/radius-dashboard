<template>
  <el-tabs v-model="activeTab">
    <el-tab-pane label="General" name="general">
      <h2>General</h2>
    </el-tab-pane>
    <el-tab-pane label="API Keys" name="api">
      <api-keys-index />
    </el-tab-pane>
    <el-tab-pane label="Account" name="account">
      <h2>Account</h2>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ApiKeysIndex from '@/pages/settings/api/index'

export default {
  name: 'Settings',
  components: { ApiKeysIndex },
  data () {
    return {
      activeTab: 'api'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
