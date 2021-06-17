<template>
  <div class="image-uploader">
    <el-upload
      action=""
      :auto-upload="false"
      :on-change="uploadPhoto"
      :show-file-list="false"
      accept="image/jpeg,image/jpg,image/png"
    >
      <div v-if="!photoUrl" class="image-uploader-text" v-loading="uploading">
        <p>Click here to <span>select image</span></p>
      </div>
      <div v-else class="image" v-loading="uploading">
        <img :src="getImage(photoUrl)" alt="Image" />
      </div>
    </el-upload>
    <div v-if="photoUrl" class="image-remove" @click="removeImage">
      <span>Remove</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageUploader',
  props: {
    photoUrl: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      uploading: false
    }
  },
  computed: {
    updatePhotoUrl: {
      get () {
        return this.photoUrl
      },
      set (value) {
        this.$emit('update:photoUrl', value)
      }
    }
  },
  methods: {
    uploadPhoto (event) {
      if (event.size / 1024 / 1024 < 20) {
        this.uploading = true
        const formData = new FormData()
        const image = event.raw

        formData.append('file', image)

        fetch('https://localhost:8080', {
          method: 'POST',
          body: formData
        })
          .then(response => response.json())
          .then(data => {
            this.updatePhotoUrl = data.url
            setTimeout(() => {
              this.uploading = false
            }, 500)
          })
          .catch(() => {
            this.$message.error('Unable to upload image')
            this.uploading = false
          })
      } else {
        this.$message.error('Image cannot be larger than 20MB!')
      }
    },
    removeImage () {
      this.updatePhotoUrl = ''
    }
  }
}
</script>

<style lang="scss">
.image-uploader {
  height: 150px;
  background: #f8faf9;
  border: 1px dashed rgba(121, 139, 131, 0.4);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  > div:first-child {
    height: 100%;
    width: 100%;

    .el-upload {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;

      > div {
        text-align: center;

        span {
          color: var(--primary);
          font-weight: 600;
        }
      }
    }
  }

  .image-remove {
    position: absolute;
    z-index: 9;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);

    span {
      color: #798b83;
      font-size: 0.875rem;
      font-weight: 500;
      text-decoration: underline;
    }
  }
}

.image-uploader .el-upload:hover {
  border-color: var(--primary);
}

.image {
  width: 60px;
  height: 60px;
  display: block;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  span {
    display: block;
    line-height: 1;
    color: #798b83 !important;
    text-decoration: underline;
  }
}
</style>
