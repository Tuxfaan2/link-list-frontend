<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useUserStore } from '@/composables/useUserStore';
import oidcUserManager, { DEFAULT_REDIRECT_SETTINGS } from '@/utils/OidcConfiguration';

const userStore = useUserStore();

async function login() {
  return oidcUserManager.getUser().then(async (user) => {
    if (user === null) {
      await oidcUserManager.signinRedirect({
        ...DEFAULT_REDIRECT_SETTINGS,
        state: { targetUrl: `${window.location.pathname}${window.location.search}` },
      });
    } else if (user.expires_in !== undefined) {
      await oidcUserManager.signinSilent(DEFAULT_REDIRECT_SETTINGS).then((value) => {
        if (value !== null) {
          userStore.login(value);
        }
      });
    } else {
      userStore.login(user);
    }
  });
}
function isCallbackPage() {
  return window.location.pathname === '/oidc-client/callback';
}
if (!isCallbackPage()) {
  login();
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
