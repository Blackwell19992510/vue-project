import vue from 'vue'
import vueRouter from 'vue-router'

import landingpage from "./components/landingpage.vue"
import login from "./components/login.vue"
import signup from "./components/signup.vue"
import { Component } from 'react/cjs/react.production.min'

vue.use(vueRouter)

const routes = [
    {
    path: '/',
    name: 'landingpage',
    Component: landingpage
    },

    {
    path: '/login',
    name: 'login',
    Component, login
    },

    {
    path: '/signup',
    name: 'signup',
    Component, signup
    }
]

