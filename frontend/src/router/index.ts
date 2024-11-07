import { createRouter, createWebHistory } from 'vue-router'
import OverviewView from "@/views/OverviewView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overwiev',
      component: OverviewView,
    },
  ],
})

export default router
