<template>
  <div>
    <div class="rd-authx-form">
      <form-container :data="data" />
    </div>
  </div>
</template>

<script>
import FormContainer from "@/components/AuthX/Widget/FormContainer";

export default {
  name: 'AuthXWidget',
  components: {
    FormContainer
  },
  data () {
    return {
      data: {}
    }
  },
  created() {
    console.log(this.$route.params.token)
  }
}
</script>

<style lang="scss" scoped>
.rd-authx-form {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
