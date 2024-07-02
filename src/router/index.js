// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue'),
      },
      
    ],
  },
  {
    path: '/pointer',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Pointer',
        component: () => import('@/views/Pointer.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: '/login',
        component: () => import('@/views/Login.vue'),
      },
    ],
  },
  {
    path: '/comparison',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'comparison',
        component: () => import('@/views/Comparison.vue'),
      },
    ],
  },
  {
    path: '/search',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'search',
        component: () => import('@/views/Search.vue'),
      },
    ],
  },
  {
    path: '/reports',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'reports',
        component: () => import('@/views/Reports.vue'),
      },
    ],
  },
  {
    path: '/inquiries',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'inquiries',
        component: () => import('@/views/Inquiries.vue'),
      },
    ],
  },
  {
    path: '/Services',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'services',
        component: () => import('@/views/Services.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
