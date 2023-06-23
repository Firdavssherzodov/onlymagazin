import { createRouter, createWebHistory } from "vue-router";

import sotuv from '../components/sotuv.vue'

const route = [
    {
        path:'/',
        name:'sotuv',
        component:sotuv,
    }
]

let router = createRouter({
    history: createWebHistory(),
    routes:route
  })
  export default router