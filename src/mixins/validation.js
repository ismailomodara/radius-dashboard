const validateUrl = (rule, value, callback) => {
  const regex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
  if (!value) {
    callback(new Error('This field is required'))
  } else if (regex.test(value) === false) {
    callback(new Error('Url is invalid'))
  } else {
    callback()
  }
}

export default {
  methods: {
    inputField () {
      return [
        {
          required: true,
          message: 'This field is required',
          trigger: 'change'
        }
      ]
    },
    passwordField () {
      return [
        {
          required: true,
          message: 'This field is required',
          trigger: 'change'
        },
        {
          min: 5,
          message: 'Minimum 5 characters long',
          trigger: 'change'
        }
      ]
    },

    emailField () {
      return [
        {
          required: true,
          message: 'This field is required',
          trigger: 'change'
        },
        {
          type: 'email',
          message: 'Email address is not valid',
          trigger: ['blur', 'change']
        }
      ]
    },

    urlField () {
      return [{ required: true, validator: validateUrl, trigger: 'blur' }]
    },

    bvnField () {
      return [
        {
          required: true,
          message: 'This field is required',
          trigger: 'change'
        },
        {
          min: 11,
          message: 'Must be 11 digits long',
          trigger: 'change'
        }
      ]
    }
  }
}
