import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/pages/login.vue')
const Register = () => import('@/pages/register.vue')

const Dashboard = () => import('@/pages/dashboard/index.vue')
const AccountVerification = () => import('@/pages/dashboard/verify.vue')

const Verifications = () => import('@/pages/verifications/index.vue')
const IdVerification = () => import('@/pages/verifications/verify.vue')

const AuthX = () => import('@/pages/authx/index.vue')
const AuthXCreate = () => import('@/pages/authx/create.vue')
const AuthXEdit = () => import('@/pages/authx/edit.vue')

const Reports = () => import('@/pages/reports/index')
const Report = () => import('@/pages/reports/id')

const Billings = () => import('@/pages/billings/index.vue')

const Settings = () => import('@/pages/settings/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      path: '/login',
      component: Login
    },
    meta: {
      guest: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard.index',
    component: Dashboard,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/dashboard/verifications',
    name: 'dashboard.verify',
    component: AccountVerification,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/verifications',
    name: 'verifications.index',
    component: Verifications,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/verifications/verify-id',
    name: 'verifications.verify',
    component: IdVerification,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/authx/',
    name: 'authx.index',
    component: AuthX,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/authx/create',
    name: 'authx.create',
    component: AuthXCreate,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/authx/edit/:id',
    name: 'authx.edit',
    component: AuthXEdit,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/reports',
    name: 'reports.index',
    component: Reports,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/reports/:id',
    name: 'reports.report',
    component: Report,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/billings',
    name: 'billings.index',
    component: Billings,
    meta: {
      guest: true,
      layout: 'app'
    }
  },
  {
    path: '/settings',
    name: 'settings.index',
    component: Settings,
    meta: {
      guest: true,
      layout: 'app'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
