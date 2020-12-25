export default {
  methods: {
    setType (value) {
      const status = value?.toLowerCase()

      const warning = ['pending', 'incomplete']
      const success = ['successful']
      const danger = ['failed']

      if (warning.includes(status)) {
        return 'warning'
      } else if (success.includes(status)) {
        return 'success'
      } else if (danger.includes(status)) {
        return 'danger'
      } else {
        return 'info'
      }
    }
  }
}
