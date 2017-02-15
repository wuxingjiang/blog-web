import VueRouter from 'vue-router'
import App from './App'

const routers = [
  {
    path: '/',
    component: App
  }
]

console.log(App)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routers: routers
})

module.exports = router
