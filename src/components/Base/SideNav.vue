<template>
  <div class="rd-sidenav" ref="sideNav">
    <div class="sidenav-logo">
      <img class="logo-web" src="@/assets/img/logo-white.png" alt="rd" />
      <img
        @click="openSideNav"
        class="logo-mobile"
        src="@/assets/img/icon-white.png"
        alt="rd"
      />
    </div>
    <el-menu
      :default-active="activeMenu"
      :router="true"
      :collapse="isSideNavOpen"
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
  </div>
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    navOpen: Boolean
  },
  data () {
    return {
      activeMenu: '',
      isSideNavOpen: false,
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
      ]
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
    },
    navOpen () {
      if (!this.navOpen) {
        this.closeSideNav()
      } else {
        this.openSideNav()
      }
    }
  },
  computed: {
    openNav: {
      get () {
        return this.navOpen
      },
      set (value) {
        this.$emit('update:navOpen', value)
      }
    }
  },
  methods: {
    openSideNav () {
      this.openNav = true
      this.$refs.sideNav.classList.add('open')
    },
    closeSideNav () {
      this.openNav = false
      this.$refs.sideNav.classList.remove('open')
    }
  }
}
</script>

<style scoped lang="scss">
.rd-sidenav {
  height: 100vh;
  width: 260px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 2px #57645e29;
  position: relative;
  padding-right: 10px;
  z-index: 99;

  .sidenav-logo {
    height: 100px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      position: absolute;
    }

    .logo-mobile {
      height: 36px;
      opacity: 0;
    }
  }

  .el-menu {
    border: none;
    height: calc(100vh - 100px);
    position: relative;
    overflow-y: scroll;

    .el-menu-item {
      height: 50px;
      font-size: 13px;
      color: #798b83;
      border-left: 4px solid transparent;
      transition: all 0.2s ease-in;

      i {
        margin-right: 16px;
        font-size: 16px;
      }

      &.is-active {
        color: var(--primary);
        background: #03a84e10;
        border-left: 4px solid var(--primary);
        border-radius: 0 4px 4px 0;
        font-weight: 500;
        transition: all 0.2s ease-out;

        i {
          color: var(--primary);
          font-weight: 500;
          transition: all 0.2s ease-out;
        }
      }
    }
  }
}

@media (max-width: 1280px) {
  .rd-sidenav {
    position: absolute;
    width: 80px;
    transition: width 0.3s ease-out;

    .logo-web {
      opacity: 0;
      transition: width 0.3s ease-out;
    }

    .logo-mobile {
      opacity: 1 !important;
      transition: width 0.3s ease-out;
    }

    .el-menu-item {
      i {
        margin-right: 0 !important;
      }

      span {
        opacity: 0;
        display: none;
        transition-delay: 0.4s;
        transition: opacity 0.3s ease-out;
      }
    }

    &.open {
      width: 260px;
      height: calc(100% - 20px);
      transition: width 0.3s ease-out;

      .logo-web {
        opacity: 1 !important;
        transition: opacity 0.3s ease-out;
      }

      .logo-mobile {
        opacity: 0 !important;
        transition: opacity 0.3s ease-out;
      }

      .el-menu-item {
        i {
          margin-right: 10px !important;
        }

        span {
          opacity: 1;
          display: inline;
          transition-delay: 0.4s;
          transition: opacity 0.3s ease-in;
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .rd-sidenav {
    width: 80vw;
    height: 100% !important;
    left: -85vw;
    border-radius: 0;
    transition: left 0.4s ease-out;

    .el-menu-item {
      i {
        margin-right: 10px !important;
      }

      span {
        opacity: 1;
        display: inline;
        transition-delay: 0.4s;
        transition: opacity 0.3s ease-in;
      }
    }

    .logo-web {
      opacity: 1 !important;
    }

    .logo-mobile {
      opacity: 0 !important;
    }

    &.open {
      width: 80vw;
      left: 0;
      transition: left 0.3s ease-out;
    }
  }
}
</style>
