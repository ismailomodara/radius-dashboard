<template>
  <div>
    <el-row type="flex">
      <el-col :lg="20" class="mx-auto">
        <card :header="false">
          <template slot="content">
            <el-row type="flex" :gutter="80" class="flex-wrap" align="middle">
              <el-col :md="8" :lg="8">
                <div class="rd-report--image">
                  <img :src="getImage(report.image)" alt="User" />
                </div>
              </el-col>
              <el-col :md="16" :lg="16">
                <el-row type="flex" class="mb-2">
                  <el-col :md="10">
                    <p>First Name</p>
                    <span>{{ report.firstName }}</span>
                  </el-col>
                  <el-col :md="14">
                    <p>Last Name</p>
                    <span>{{ report.date }}</span>
                  </el-col>
                </el-row>
                <el-row type="flex" class="mb-2">
                  <el-col :md="10">
                    <p>Mobile No</p>
                    <span>{{ report.mobile }}</span>
                  </el-col>
                  <el-col :md="14">
                    <p>Last Name</p>
                    <span>{{ report.bvn }}</span>
                  </el-col>
                </el-row>
                <el-row type="flex" class="mb-2">
                  <el-col :md="10">
                    <p>Date</p>
                    <span>{{ report.date }}</span>
                  </el-col>
                  <el-col :md="14">
                    <p>Last Name</p>
                    <el-tag :type="setType(report.status)">{{ formatText(report.status) }}</el-tag>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Report',
  data () {
    return {
      loading: false,
      step: 1,
      report: {
        image: 'https://images.pexels.com/photos/3796620/pexels-photo-3796620.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        firstName: 'Abdul',
        lastName: 'Rahmon',
        mobile: '08011223344',
        bvn: '22223492423',
        date: '24 Dec, 2020',
        status: 'verified'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.rd-report--image {
  margin: auto;
  height: 180px;
  width: 180px;
  border-radius: 100%;

  img {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    object-fit: cover;
  }
}

p {
  font-size: 0.875rem;
  margin-bottom: 5px;
}

span {
  font-size: 0.875rem;
  font-weight: 500;
  color: #140508;
}

.el-tag {
  font-size: 0.75rem;
}
</style>
