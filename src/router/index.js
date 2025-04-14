import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'home',
      component:()=>import('@/views/Home.vue')
    },
    {
      path:"/blast/home",
      name:"blast",
      component:()=>import('@/views/Blast.vue')
    }
  ]
})
export default router