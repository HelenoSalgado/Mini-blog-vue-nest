import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/modules/home/HomeView.vue';
import PostView from '@/modules/blog/post/PostView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/modules/about/AboutView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/modules/register/RegisterView.vue'),
    },
    {
      path: '/sucess',
      name: 'sucess',
      component: () => import('@/views/SucessView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/modules/login/LoginView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/modules/blog/BlogView.vue'),
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: PostView,
    },
    {
      path: '/edite/:id',
      name: 'edite',
      component: () => import('@/modules/blog/post/EditePostView.vue'),
    }
  ]
})

export default router
