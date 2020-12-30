import Vue from 'vue'

import AppLayout from '../../layouts/app.vue'
import DefaultLayout from '../../layouts/default.vue'

import Avatar from './Avatar'
import Card from './Card'
import SummaryCard from './SummaryCard'
import Pagination from './Pagination'
import PageHeader from './PageHeader'

Vue.component('app-layout', AppLayout)
Vue.component('default-layout', DefaultLayout)

Vue.component('avatar', Avatar)
Vue.component('card', Card)
Vue.component('summary-card', SummaryCard)
Vue.component('pagination', Pagination)
Vue.component('page-header', PageHeader)
