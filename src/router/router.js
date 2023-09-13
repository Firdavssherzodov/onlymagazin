import { createRouter,createWebHistory } from 'vue-router'
import malumot from '../page/malumot.vue'
import home from '../components/Home.vue'
import like from '../Page/like.vue'
import savat from '../components/savat/savat.vue'
 import update from '../Page/Update.vue'
const route = [
    {
        path:'/',
        name:'home',
        component:home,
    },
    {
        path:'/malumot',
        component:malumot,
        name:'malumot',
    
    },
    {
        path:'/like',
        component:like,
        name:'like',
    },
    {
        path:'/savat',
        component:savat,
        name:'savat'
    },
    {
        path:'/update',
        component:update,
        name:'update'
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes:route
  })
  export default router