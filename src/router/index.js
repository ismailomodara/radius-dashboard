import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/pages/login')
const Register = () => import('@/pages/register')

const Dashboard = () => import('@/pages/dashboard/index')
const AccountVerification = () => import('@/pages/dashboard/verify')

const Verifications = () => import('@/pages/verifications/index')
const IdVerification = () => import('@/pages/verifications/verify')

const AuthX = () => import('@/pages/authx/index')
const AuthXCreate = () => import('@/pages/authx/create')
const AuthXEdit = () => import('@/pages/authx/edit')

const Reports = () => import('@/pages/reports/index')
const Report = () => import('@/pages/reports/id')

const Billings = () => import('@/pages/billings/index')

const Developers = () => import('@/pages/developers/index')

const Settings = () => import('@/pages/settings/index')
const ApiCreate = () => import('@/pages/settings/api/create')
const ApiEdit = () => import('@/pages/settings/api/edit')

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
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/dashboard/verifications',
    name: 'dashboard.verify',
    component: AccountVerification,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/verifications',
    name: 'verifications.index',
    component: Verifications,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/verifications/verify-id',
    name: 'verifications.verify',
    component: IdVerification,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/authx/',
    name: 'authx.index',
    component: AuthX,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/authx/create',
    name: 'authx.create',
    component: AuthXCreate,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/authx/edit/:id',
    name: 'authx.edit',
    component: AuthXEdit,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/reports',
    name: 'reports.index',
    component: Reports,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/reports/:id',
    name: 'reports.report',
    component: Report,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/billings',
    name: 'billings.index',
    component: Billings,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/developers',
    name: 'developers.index',
    component: Developers,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/settings',
    name: 'settings.index',
    component: Settings,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/settings/api/create',
    name: 'settings.api.create',
    component: ApiCreate,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  },
  {
    path: '/settings/api/edit/:id',
    name: 'settings.api.edit',
    component: ApiEdit,
    meta: {
      requiresAuth: true,
      layout: 'app'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
