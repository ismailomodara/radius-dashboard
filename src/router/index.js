import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/pages/login.vue')
const Register = () => import('@/pages/register.vue')

const Dashboard = () => import('@/pages/dashboard/index.vue')
const AccountVerification = () => import('@/pages/dashboard/verify.vue')

const Verifications = () => import('@/pages/verifications/index.vue')
const IdVerification = () => import('@/pages/verifications/verify.vue')

const Reports = () => import('@/pages/reports/index')
const Report = () => import('@/pages/reports/id')

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
