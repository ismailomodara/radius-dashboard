<template>
  <div v-loading.fullscreen="loading">
    <requests />
  </div>
</template>

<script>
import Requests from '@/components/Reports/Reports'
export default {
  name: 'Reports',
  components: { Requests },
  data () {
    return {
      loading: false
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
