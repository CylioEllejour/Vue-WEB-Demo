import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const about = () => import("../views/About.vue")
const home = () => import("../views/Home.vue")    //懒加载
const login = () => import("../views/login.vue")
const register = () => import("../views/register.vue")

const routes = [
  {
    path: '',//为空表面默认加载（在没有指定时）
    redirect: '/login'   //重定向
  },
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'About',
    component: about,
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


//使用push的方法
const RouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return RouterPush.call(this, to).catch(err => err)
}

//使用replace的方法
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return RouterReplace.call(this, to).catch(err => err)
}


export default router
