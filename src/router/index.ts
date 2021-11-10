import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Dashboard from '../components/Dashboard.vue'
import Alerts from '../components/Alerts.vue'
import FlowReadingsHistory from '../components/FlowReadingsHistory.vue'
import LoginPage from '../components/LoginPage.vue'
import LoginService from "../services/LoginService";
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
        component: Dashboard
    },

    {
        path: '/alerts',
        name: 'Alerts',
        component: Alerts
    },

    {
        path: '/flowReadingsHistory',
        name: 'FlowReadingsHistory',
        component: FlowReadingsHistory
    },

    {
        path: '/loginPage',
        name: 'LoginPage',
        component: LoginPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

let loginService = LoginService()

router.beforeEach((to, from) => {
    if (to.path === '/alerts' || to.path === '/dashboard') {
        if (!loginService.get()) {
            router.push('/loginPage')
            alert("You Must Login First")
        }
    }
})

// here
export default router