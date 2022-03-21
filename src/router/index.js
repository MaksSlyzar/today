import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/today-list',
		name: 'TodayList',
		component: () => import('@/views/TodayList')
	},
	{
		path: '/settings',
		name: 'Settings',
		component: () => import('@/views/Settings')
	},
	{
		path: '/notates',
		name: 'Notates',
		component: () => import('@/views/Notates')
	},
	{
		path: '/create-schedule',
		name: 'CreateSchedule',
		component: () => import('@/views/CreateSchedule')
	}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
