import { createRouter, createWebHistory } from 'vue-router';
import OverviewView from '@/views/OverviewView.vue';
import MenuView from '@/views/MenuView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overwiev',
      component: OverviewView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
    },
  ],
});

export default router;
