import landingpage from "./../components/landingpage.vue"
import login from "./../components/login.vue"
import signup from "./../components/signup.vue"
import { createRouter, createWebHistory } from 'vue-router'

vue.use(vueRouter)

const routes = [
    {
    path: '/',
    name: 'landinpage',
    Component: landingpage,
    },

    {
    path: '/login',
    name: 'login',
    Component: login,
    },

    {
    path: '/signup',
    name: 'signup',
    Component: signup,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router

