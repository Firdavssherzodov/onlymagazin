import { createRouter,createWebHistory } from 'vue-router'
import malumot from '../page/malumot.vue'
import home from '../components/Home.vue'
import admin from '../components/admin.vue'
import like from '../page/like.vue'
const route = [
    {
        path:'/',
        name:'home',
        component:home,
    },
    {
        path:'/malumot/:id',
        component:malumot,
        name:'malumot',
        props:true
    
    },
    {
        path:'/admin',
        component:admin,
        name:'admin',

    },
    {
        path:'/like',
        component:like,
        name:'like',
    }


]

let router = createRouter({
    history: createWebHistory(),
    routes:route
  })
  export default router