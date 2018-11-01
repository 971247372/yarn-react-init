import Vue from 'vue'
import Router from 'vue-router'
import { session, config } from 'common'
import Layout from './views/Layout.vue'

// route level code-splitting
// this generates a separate chunk (component.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Example = () => import(/* webpackChunkName: "example" */ './views/Example')
const Signin = () => import(/* webpackChunkName: "sign-in" */ './views/Signin')
const ComponentPage = () => import(/* webpackChunkName: "component" */ './views/Component')

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    meta: {
      // 需要登录
      requiresAuth: true
    },
    children: [
      {
        path: '/',
        name: 'example',
        component: Example,
        meta: {
          label: 'Example page'
        }
      }
    ]
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: Signin
  }
]

if (config.isDev) {
  routes.push({
    path: '/components',
    name: 'components',
    component: ComponentPage
  })
}

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!session.isLoggedIn()) {
      next({
        name: 'sign-in',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
