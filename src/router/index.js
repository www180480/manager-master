import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import index from '@/components/index'

//
import managerM from '@/components/managerM'
import wel from '@/components/wel'
import userM from '@/components/userM'
import noticeM from '@/components/noticeM'
import deviceM from '@/components/deviceM'
import managerMC from '@/components/managerMC'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },{
      path:'/index',
      component:index,
      children:[
        {
          path:'/managerM',
          component:managerM,
        }, 
        {
          path:'/managerM/managerMC',
          component:managerMC,
        }, 
        {
          path:'/userM',
          component:userM
        },  
        {
          path:'/noticeM',
          component:noticeM
        },  
        {
          path:'/deviceM',
          component:deviceM
        },   
        {
          path:'/wel',
          component:wel
        },
        {
          path:'',
          redirect:'/wel',
        }

      ]
    },{
      path:'*',
      redirect:'/login'
    }
  ]
})
