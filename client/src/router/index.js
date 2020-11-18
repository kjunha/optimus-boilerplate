import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NotFound from '../views/default/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tasks',
    name: 'Task',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/task/list.vue')
  },
  {
    path: '/tasks/:id',
    name: 'TaskItem',
    props: (route) => ({task_id: route.params.id}),
    component: () => import('../views/task/item.vue')
  },
  {
    path: '/chats',
    name: 'Chat',
    component: () => import('../views/chat/chat.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/gallery/main.vue')
  },
  {
    path: '/gallery/new',
    name: 'CreateGallery',
    component: () => import('../views/gallery/new.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
