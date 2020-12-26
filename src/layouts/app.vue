<template>
  <div class="rd">
    <div class="rd-header">
      <div class="rd-page--header">
        <el-container>
          <div class="rd-logo">
            <img :src="getImage('logo.png')" alt="Radius" />
          </div>
          <div>
            <div class="rd-user">
              <el-switch
                v-model="userActive"
                active-text="Live"
                class="mr-1">
              </el-switch>
              <el-badge :value="3" class="mr-1" type="primary">
                <i class="rd-icon--bell"></i>
              </el-badge>
              <p>{{ userName }}</p>
              <el-dropdown trigger="click" @command="command">
                <div class="rd-user--action">
                  <avatar :size="36" :name="userName" />
                  <i class="rd-icon--chevron-down"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="rd-icon--user" command="settings"
                  >Profile</el-dropdown-item
                  >
                  <el-dropdown-item icon="el-icon-switch-button" command="logout"
                  >Logout</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </el-container>
      </div>
      <div class="rd-header--nav">
        <el-container>
          <el-menu
            :default-active="activeMenu"
            :router="true"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#000000"
            text-color="#fff"
            active-text-color="#fff">
            <el-menu-item
              v-for="(route, index) in routes"
              :key="index"
              :index="route.name"
              :route="{ name: `${route.name}.index` }"
            >
              <i :class="`rd-icon--${route.icon}`"></i>
              <span>{{ route.label }}</span>
            </el-menu-item>
          </el-menu>
        </el-container>
      </div>
    </div>
    <div class="rd-dashboard--body">
      <el-container>
        <transition name="fade" mode="out-in">
          <slot />
        </transition>
      </el-container>
      <div v-if="showFundWalletCTA" class="rd-fund--wallet">
        <div class="balance">
          <span>Balance</span>
          <h6>{{ formatPrice(15070) }}</h6>
        </div>
        <div class="fund" @click="showFundWallet = true">
          <i class="rd-icon--plus"></i>
        </div>
      </div>
    </div>
    <fund-wallet :show.sync="showFundWallet" />
  </div>
</template>

<script>
import FundWallet from '@/components/Wallet/Fund'
export default {
  name: 'AppLayout',
  components: { FundWallet },
  data () {
    return {
      userActive: true,
      activeMenu: '',
      routes: [
        {
          icon: 'grid',
          label: 'Dashboard',
          name: 'dashboard'
        },
        {
          icon: 'check-circle',
          label: 'Verify',
          name: 'verifications'
        },
        {
          icon: 'lock',
          label: 'AuthX',
          name: 'authx'
        },
        {
          icon: 'clipboard',
          label: 'Reports',
          name: 'reports'
        },
        {
          icon: 'credit-card',
          label: 'Billings',
          name: 'billings'
        },
        {
          icon: 'settings',
          label: 'Settings',
          name: 'settings'
        }
      ],
      showFundWallet: false
    }
  },
  computed: {
    userName () {
      return 'Snubby Pay'
    },
    showFundWalletCTA () {
      return !this.$route.path.includes('dashboard')
    }
  },
  mounted () {
    if (this.$route.path !== null) {
      this.activeMenu = this.$route.path.split('/')[1]
    }
  },
  watch: {
    $route () {
      if (this.$route.path !== null) {
        this.activeMenu = this.$route.path.split('/')[1]
      }
    }
  },
  methods: {
    command (command) {
      if (command === 'settings') {
        this.$router.push({ name: 'settings.index' })
      } else {
        this.$router.push({ name: 'report' })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.rd {
  height: 100%;
  width: 100%;
  position: relative;
  overflow-y: scroll;

  .rd-header {
    position: fixed;
    height: calc(15vh + 80px);
    width: 100%;
    z-index: 999;

    .rd-page--header {
      height: 15vh;
      background: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      .el-container {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      .rd-logo img {
        height: 50px;
        width: auto;
      }

      .rd-user {
        display: flex;
        align-items: center;

        p {
          margin: 0 10px;
          font-weight: 500;
        }

        .rd-user--action {
          display: flex;
          align-items: center;
          i {
            margin-left: 7px;
          }
        }
      }
    }
    .rd-header--nav {
      background: #000000;
      width: 100%;

      .el-menu {
        height: 70px;
        display: flex;
        justify-content: center;
        border: none;

        .el-menu-item {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 4px solid transparent;
          opacity: 0.7;
          padding: 0 30px;
          font-weight: 500;

          i {
            color: #fff;
          }
          i + span {
            margin-left: 7px;
          }

          &.is-active {
            opacity: 1;
            border-bottom: 4px solid var(--primary) !important
          }
        }
      }
    }
  }

  .rd-dashboard--body {
    margin-top: calc(15vh + 80px);
    padding: 60px 0;
    position: relative;

    .rd-fund--wallet {
      background: #36AFA4;
      position: fixed;
      padding: 20px;
      border-radius: 8px;
      box-shadow: -8px 32px 50px rgba(0, 0, 0, 0.08);
      right: 40px;
      bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .balance {
        margin-right: 80px;

        h6, span {
          color: #fff;
        }
      }

      .fund {
        border-radius: 100%;
        background: #ffffff;
        color: #36AFA4;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.25s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

@media (max-width: 600px) {
  .el-menu-item span {
    display: none;
  }
}
</style>
