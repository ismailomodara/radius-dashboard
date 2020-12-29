<template>
  <div>
    <div class="rd-page--section">
      <el-row type="flex">
        <el-col :span="24">
          <h6>Auth X</h6>
          <p>Create a secure & beautiful login pages to easily authenticate and onboard your users.</p>
        </el-col>
      </el-row>
    </div>
    <div class="rd-page--section">
      <el-row type="flex" class="flex-wrap" :gutter="40">
        <el-col :md="6" :lg="6">
          <div class="rd-authx" @click="editAuthX(2)">
            <img :src="getImage('user.svg')" alt="User" />
            <span>AuthX Name</span>
          </div>
        </el-col>
        <el-col :md="6" :lg="6">
          <div class="rd-authx add" @click="createAuthX">
            <i class="rd-icon--plus-circle"></i>
            <span>Add New</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AuthX',
  data () {
    return {}
  },
  methods: {
    editAuthX (id) {
      this.$router.push({ name: 'authx.edit', params: { id } })
    },
    createAuthX () {
      this.$router.push({ name: 'authx.create' })
    }
  }
}
</script>

<style lang="scss" scoped>
.rd-authx {
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #D0516910;
  border: 1px solid #D05169;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  img {
    border-radius: 100px;
    object-fit: cover;
    height: 50px;
    width: auto;
    margin-bottom: 10px;
  }

  i, span {
    color: #140508;
    font-size: 1rem;
    font-weight: 500;
  }

  i {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  &.add {
    border: 1px dashed #140508;
    background: transparent;

    &:hover {
      background: #D0516910;
      border-color: #D05169;
      transition: all 0.3s ease-out;
    }
  }
}
</style>
