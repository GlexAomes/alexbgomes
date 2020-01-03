import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'

import HelloWorld from '../components/HelloWorld.vue'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: HelloWorld
    }, {
        path: '/home',
        component: Home
    }, {
        path: '*',
        component: NotFound
    }]

export default new VueRouter({
    mode: 'history',
    routes
})