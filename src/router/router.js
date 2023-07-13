import { createRouter,createWebHistory } from 'vue-router'
import malumot from '../page/malumot.vue'
import home from '../components/Home.vue'
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
    
    }

]

let router = createRouter({
    history: createWebHistory(),
    routes:route
  })
  export default router