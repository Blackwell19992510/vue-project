import { createRouter, createWebHistory } from 'vue-router'

import landingpage from "./../components/landingpage.vue"
import about from "./../components/about.vue"
import login from "./../components/login.vue"
import signup from "./../components/signup.vue"
import register from "./../components/register.vue"


const routes = [
    {
        path: '/',
        name: 'landingpage',
        Component: landingpage,
    },
    
    {
        path: '/about',
        name: 'about',
        Component: about,
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
    },

    {
        path: '/register',
        name: 'register',
        Component: register,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router

