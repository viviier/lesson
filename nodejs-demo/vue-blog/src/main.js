import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import Axios from 'axios'

Vue.prototype.$http = Axios

Vue.use(ElementUI)
Vue.use(VueRouter)

import Login from './components/Login'
import TodoList from './components/TodoList'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/todolist',
      component: TodoList
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token')
  if(to.path == '/') {
    if(token != null && token != 'null') {
      next('/todolist')
    }
    next()
  } else {
    if(token != 'null' && token != null) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
      next()
    } else {
      next('/')
    }
  }
})

const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')