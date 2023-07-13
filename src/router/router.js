import { createRouter,createWebHistory } from 'vue-router'
import sotuvchi from '../components/sotuv.vue'

const route = [
    {
        path:'/',
        name:'sotuv',
        component:sotuvchi,
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes:route
  })
  export default router