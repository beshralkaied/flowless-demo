import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Dashboard from '../components/Dashboard.vue'
import Alerts from '../components/Alerts.vue'
import FlowReadingsHistory from '../components/FlowReadingsHistory.vue'
import LoginPage from '../components/LoginPage.vue'
import LoginService from "../services/LoginService";
import ShowAction from "../components/ShowAction.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },

    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
    },

    {
        path: '/alerts',
        name: 'Alerts',
        component: Alerts,
        meta: { requiresAuth: true }
    },

    {
        path: '/flowReadingsHistory',
        name: 'FlowReadingsHistory',
        component: FlowReadingsHistory
    },

    {
        path: '/loginPage',
        name: 'LoginPage',
        component: LoginPage,

    },

    {
        path: '/showAction',
        name: 'ShowAction',
        component: ShowAction,

    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

let loginService = LoginService()

router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.requiresAuth) {
        if (loginService.check()) {
            next()
        }else{
            next({name:'LoginPage'})
        }
    } else {
        next()
    }
})

// here
export default router