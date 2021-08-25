<template>
  <div class="rd">
    <div class="rd-sidebar">
      <div class="rd-logo">
        <img v-if="isCollapse" :src="getImage('icon.png')" alt="R" />
        <img v-else :src="getImage('logo.png')" alt="R" />
      </div>
      <div class="rd-sidebar__menu">
        <el-menu
          :default-active="activeMenu"
          :collapse="isCollapse"
          :router="true">
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
      <div class="rd-sidebar__toggler" :class="{ closed: isCollapse }">
        <span @click="isCollapse = !isCollapse">
          <i :class="`rd-icon--arrow-${isCollapse ? 'right' : 'left'}`"></i>
        </span>
      </div>
    </div>
    <div class="rd-overlay"></div>
    <div class="rd-dashboard--body">
      <div class="rd-dashboard--body__nav">
        <el-button type="primary" size="small">API Doc</el-button>
        <div class="rd-notification">
          <el-popover
            placement="bottom-end"
            title="Notifications"
            trigger="click">
            <div>
              <p>This should be the content</p>
            </div>
            <el-badge slot="reference" is-dot class="item">
            <span class="notification">
              <i class="rd-icon--bell" />
            </span>
            </el-badge>
          </el-popover>
        </div>
        <div>
          <avatar :size="36" :name="userName" :background="'#cccccc'" />
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
      <div class="rd-dashboard--body__content">
        <el-container>
          <transition name="fade" mode="out-in">
            <slot />
          </transition>
        </el-container>
      </div>
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
      isCollapse: false,
      activeMenu: 'dashboard',
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

    const mediaQuery = 'screen and (min-width:320px) and (max-width:1024px)'
    window.matchMedia(mediaQuery).addEventListener('change', (data) => {
      this.isCollapse = !!data.matches
    })
  },
  watch: {
    $route () {
      if (this.$route.path !== null) {
        this.activeMenu = this.$route.path.split('/')[1]
      }
    }
  },
  created () {
    const mediaQuery = 'screen and (min-width:320px) and (max-width:1024px)'
    this.isCollapse = window.matchMedia(mediaQuery).matches
  },
  methods: {
    command (command) {
      if (command === 'settings') {
        this.$router.push({ name: 'settings.index' })
      } else {
        this.$router.push({ name: 'report' })
      }
    },
    toggleNav () {
      const mediaQuery = 'screen and (min-width:320px) and (max-width:1024px)'
      window.matchMedia(mediaQuery).addEventListener('change', () => {
        this.isCollapse = true
      })
    }
  }
}
</script>

<style lang="scss">
.rd {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  .rd-sidebar {
    height: 100%;
    background: #1d080c;
    padding: 15px;
    z-index: 4;
    position: relative;

    .rd-logo {
      display: flex;
      justify-content: center;
      margin: 40px 0 50px;

      img {
        height: 36px;
        width: auto;
      }
    }

    &__menu {
      background: transparent;

      .el-menu {
        width: 250px;
        border: none;
        background: none;
        margin-top: 20px;
        position: relative;
        overflow: hidden;

        &.el-menu--collapse {
          width: 64px;
        }

        .el-menu-item {
          background: transparent;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          font-size: 12px;
          font-weight: 400;
          opacity: 0.7;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          border-left: 5px solid transparent;
          padding: 14px 20px;
          height: 50px;
          transition: all 0.3s ease-in-out;

          span {
            margin-left: 14px;
            transition: opacity 0.3s ease-in-out;
          }

          i {
            font-size: 14px;
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

    &__toggler {
      position: absolute;
      bottom: 40px;
      right: 20px;
      cursor: pointer;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        width: 36px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.08);

        i {
          font-size: 14px;
          color: #FFFFFF;
        }
      }

      &.closed {
        right: unset;
        left: 50%;
        transform: translateX(-50%);
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
    overflow: hidden;
    width: 100%;
    background: #EEF0F5;
    position: relative;

    &__nav {
      background: #FFFFFF;
      height: 70px;
      padding: 20px;
      box-shadow: 3px 0 5px rgba(0, 0, 0, 0.08);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      z-index: 2;

      .rd-notification {
        margin: 0 30px;
        cursor: pointer;

        .notification {
          i {
            color: #140508;
          }
        }
      }

      .rd-user {
        margin-left: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p {
          margin: 0 10px;
          font-weight: 500;
          color: #140508;
        }
      }

      .rd-user--action {
        i {
          color: #140508;
        }
      }
    }

    &__content {
      height: 100%;
      padding: 30px;
      overflow-y: scroll;
    }

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
      transition: width 0.3s ease-in;
      z-index: 4;

      &.open {

        + .rd-overlay {
          opacity: 1;
          z-index: 3;
          transition: opacity 0.3s ease-out;
        }
      }
    }

    .rd-dashboard--body {
      width: 100% !important;

      &__content {
        padding-left: 130px !important;
      }
    }
  }
}

@media (max-width: 600px) {
  .rd {
    .rd-dashboard--body {

      &__nav {
        .rd-user p {
          display: none;
        }
      }
      &__content {
        padding-left: 100px !important;
        padding-right: 0px !important;
      }
    }
  }
}
</style>
