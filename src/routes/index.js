import { createRouter, createWebHistory } from 'vue-router'

import landingpage from "../components/landingpage.vue"
import about from "../components/about.vue"
import login from "../components/login.vue"
import register from "../components/register.vue"
import student from "./../components/Student.vue"


const routes = [
    {
        path: '/',
        name: 'landingpage',
        component: landingpage,
    },
    
    {
        path: '/about',
        name: 'about',
        component: about,
    },

    {
        path: '/login',
        name: 'login',
        component: login,
    },

    {
        path: '/register',
        name: 'register',
        component: register,
    },

    {
        path: '/student',
        name: 'student',
        component: student,
      },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router

