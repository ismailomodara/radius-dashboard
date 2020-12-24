<template>
  <div class="rd">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style scoped lang="scss">
.rd {
  width: 100%;
  height: 100%;
}
</style>
