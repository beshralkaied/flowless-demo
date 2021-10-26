import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Dashboard from '../components/Dashboard.vue'
import Alerts from '../components/Alerts.vue'
import FlowReadingsHistory from '../components/FlowReadingsHistory.vue'
const routes = [
    {
     path:'/',
     name:'Home',
     component: Home,
    },
    
    {
        path:'/about',
        name:'About',
        component: About
    },
    
    {
        path:'/dashboard',
        name:'Dashboard',
        component: Dashboard
    },
    
    {
        path:'/alerts',
        name:'Alerts',
        component: Alerts
    },
    
    {
        path:'/flowReadingsHistory',
        name:'FlowReadingsHistory',
        component: FlowReadingsHistory
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router