<template>
  <div class="rd">
    <div class="rd-sidebar">
      <div class="rd-sidebar__header">
        <div @click="toggle">
          <avatar :size="36" :name="userName" :background="'#140508'" />
        </div>
        <div class="rd-user">
          <p>{{ userName }}</p>
          <el-dropdown trigger="click" @command="command">
            <div class="rd-user--action">
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
      <div class="rd-sidebar__menu">
        <el-menu
          :default-active="activeMenu"
          :router="true">
          <el-menu-item class="notification">
            <i :class="'rd-icon--bell'"></i>
            <span>Notification</span>
            <span class="badge">9</span>
          </el-menu-item>
          <template v-for="(route, index) in routes">
            <el-submenu v-if="route.type === 'group'" :index="route.name" :key="index">
              <template slot="title">
                <i :class="`rd-icon--${route.icon}`"></i>
                <span>{{ route.label }}</span>
              </template>
              <el-menu-item
                v-for="(child, i) in route.children"
                :key="i"
                :index="child.name"
                :route="{ name: `${child.name}.index` }"
              >
                <i :class="`rd-icon--${child.icon}`"></i>
                <span>{{ child.label }}</span>
              </el-menu-item>
            </el-submenu>
            <el-menu-item
              v-if="route.type === 'regular'"
              :key="index"
              :index="route.name"
              :route="{ name: `${route.name}.index` }"
            >
              <i :class="`rd-icon--${route.icon}`"></i>
              <span>{{ route.label }}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </div>
    <div class="rd-overlay" @click="closeNav"></div>
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
          name: 'dashboard',
          type: 'regular'
        },
        {
          icon: 'check-circle',
          label: 'Identity',
          name: 'verifications',
          type: 'regular'
        },
        {
          icon: 'lock',
          label: 'AuthX',
          name: 'authx',
          type: 'regular'
        },
        {
          icon: 'clipboard',
          label: 'Reports',
          name: 'reports',
          type: 'regular'
        },
        {
          icon: 'credit-card',
          label: 'Billings',
          name: 'billings',
          type: 'regular'
        },
        {
          icon: 'settings',
          label: 'Settings',
          name: 'settings',
          type: 'regular'
        }
      ],
      showFundWallet: false
    }
  },
  computed: {
    userName () {
      return 'NQLB'
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
    },
    toggle () {
      document.querySelector('.rd-sidebar').classList.toggle('open')
    },
    closeNav () {
      document.querySelector('.rd-sidebar').classList.remove('open')
    }
  }
}
</script>

<style lang="scss">
$--sidenav: 300px;

.rd {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  .rd-sidebar {
    width: $--sidenav;
    height: 100%;
    background: #140508;
    padding: 20px;
    overflow-y: scroll;
    z-index: 4;
    opacity: 0.8;

    &__header {
      background: #d0516990;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 40px;
      display: flex;
      align-items: center;

      .rd-user {
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        p {
          margin: 0 10px;
          font-weight: 500;
          color: #fff;
        }
      }

      .rd-user--action {
        i {
          color: #FFFFFF;
        }
      }
  }

    &__menu {
      background: transparent;
      width: 100%;

      .el-menu {
        border: none;
        background: none;
        margin-top: 16px;
        position: relative;
        overflow-y: auto;
        overflow-x: hidden;

        .el-menu-item {
          background: transparent;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 400;
          opacity: 0.7;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          border-left: 5px solid transparent;
          padding: 14px 20px;
          transition: all 0.3s ease-in-out;

          span {
            margin-left: 14px;
            transition: opacity 0.3s ease-in-out;
          }

          i {
            color: #FFFFFF;
          }

          &.is-active {
            opacity: 1;
            background: #fdf6f720;
            border-color: var(--primary);
            color: #ffffff;

            i {
              color: #ffffff !important;
            }
          }

          &:hover:not(.is-active) {
            background: #fdf6f730;
          }

          &.notification {
            padding-top: 26px !important;
            padding-bottom: 26px !important;
            margin: 16px 0 30px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 1px solid #ffffff40;
            position: relative;
            opacity: 1;

            i, span {
              opacity: 0.5;
            }

            .badge {
              opacity: 1;
              height: 20px;
              width: 20px;
              border-radius: 50%;
              background: #e1404d;
              color: #ffffff;
              font-size: 12px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              right: 10px;
            }
          }
        }

        .el-submenu {
          padding: 14px 20px;
          border-left: 5px solid transparent;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          opacity: 0.5;
          transition: all 0.3s ease-in-out;

          &:hover {
            background: #fdf6f730;
          }

          &.is-opened {
            background: transparent !important;
          }

          .el-submenu__title {
            height: 28px;
            line-height: 28px;
            padding: 0 !important;

            &:hover {
              background: transparent;
            }

            span {
              margin-left: 14px;
              color: #FFFFFF;
              transition: opacity 0.3s ease-in-out;
            }

            i {
              color: #FFFFFF;
            }
          }

          .el-menu-item {
            padding-left: 20px;
          }
        }
      }
    }
  }

  .rd-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  .rd-dashboard--body {
    height: 100vh;
    width: calc(100% - #{$--sidenav});
    background: #EEF0F5;
    padding: 30px;
    overflow-y: scroll;
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

@media (max-width: 1024px) {
  .rd {
    .rd-sidebar {
      position: absolute;
      left: 0;
      width: 80px;
      padding: 20px 5px;
      transition: width 0.3s ease-in;
      z-index: 4;

      &__header {
        display: flex;
        justify-content: center;

        .rd-user {
          display: none;
        }
      }

      &__menu {
        .el-menu-item span {
          display: none;
        }

        .el-submenu {
          &__title span {
            display: none;
          }

          .el-submenu__icon-arrow {
            display: none;
          }
          .el-menu-item {
            padding-left: 0 !important;
          }
        }
      }

      &.open {
        width: 300px !important;
        padding: 20px;
        transition: width 0.3s ease-out;

        .rd-sidebar__header {
          display: flex !important;
          justify-content: space-between !important;

          .rd-user {
            display: flex !important;
          }
        }

        .rd-sidebar__menu {
          .el-menu-item span {
            display: flex !important;
          }

          .el-submenu {
            &__title {
              display: flex !important;
              align-items: center;

              span {
                display: flex;
                padding-left: 10px !important;
              }
            }

            .el-submenu__icon-arrow {
              display: flex;
            }
            .el-menu-item {
              padding-left: 10px !important;
            }
          }
        }

        + .rd-overlay {
          opacity: 1;
          z-index: 3;
          transition: opacity 0.3s ease-out;
        }
      }
    }

    .rd-dashboard--body {
      width: 100% !important;
      padding-left: 100px !important;
    }
  }
}

@media (max-width: 600px) {
  .rd {
    .rd-sidebar {
      &.open {
        width: 80% !important;

        .rd-sidebar__header {
          display: flex !important;
          justify-content: space-between !important;

          .rd-user {
            display: flex !important;
          }
        }

        .rd-sidebar__menu {
          .el-menu-item span {
            display: flex !important;
          }
        }
      }
    }

    .rd-dashboard--body {
      padding-left: 80px !important;
      padding-right: 10px !important;
    }
  }
}
</style>
