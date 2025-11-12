import { createRouter, createWebHistory } from 'vue-router';
import OverviewView from '@/views/OverviewView.vue';
import CallbackView from '@/views/CallbackView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: OverviewView,
    },
    {
      path: '/oidc-client/callback',
      name: 'callback',
      component: CallbackView,
    },
  ],
});

export default router;
