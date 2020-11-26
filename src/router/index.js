import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/login'
import Home from '@/views/home/home'
import Layout from '@/views/layout/layout'
import Article from '@/views/article/article'
import Publish from '@/views/publish/publish'
import Image from '@/views/image/image'
import Comment from '@/views/comment/comment'
import Settings from '@/views/settings/settings'
import Fans from '@/views/fans/fans'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '', // path为空，作为默认子路由
        name: 'home',
        component: Home
      },
      {
        path: 'article',
        name: 'article',
        component: Article
      },
      {
        path: 'publish',
        name: 'publish',
        component: Publish
      },
      {
        path: 'image',
        name: 'image',
        component: Image
      },
      {
        path: 'comment',
        name: 'comment',
        component: Comment
      },
      {
        path: 'settings',
        name: 'settings',
        component: Settings
      },
      {
        path: 'fans',
        name: 'fans',
        component: Fans
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
