<template>
  <div></div>
</template>
<script lang="ts" setup>
import userManager from '../utils/OidcConfiguration';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/composables/useUserStore';

const userStore = useUserStore();
const router = useRouter();
console.log('callback');
userManager
  .signinCallback()
  .then(async (response) => {
    if (response !== undefined) {
      userStore.login(response);
      if (
        typeof response.state === 'object' &&
        response.state !== null &&
        'targetUrl' in response.state &&
        typeof response.state.targetUrl === 'string'
      ) {
        router.push(response.state.targetUrl);
      }
    }
  })
  .catch(console.error);
</script>
