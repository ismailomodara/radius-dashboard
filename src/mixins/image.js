export default {
  methods: {
    getImage (image) {
      const imageUrl = image
      if (image.indexOf('http') < 0) {
        return require(`../assets/img/${imageUrl}`)
      }
      return imageUrl
    },

    getBase64Image (image) {
      const base64Prefix = 'data:image/png;base64, '
      return `${base64Prefix} ${image}`
    }
  }
}
