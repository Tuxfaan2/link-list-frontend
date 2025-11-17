import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { USER_STORE_KEY, useUserStore } from '@/composables/useUserStore';

const app = createApp(App);
app.provide(USER_STORE_KEY, useUserStore());
app.use(router);
app.mount('#app');
