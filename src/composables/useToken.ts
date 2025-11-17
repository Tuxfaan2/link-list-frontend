import type { User } from 'oidc-client-ts';
import { useUserStore } from '@/composables/useUserStore';
import oidcUserManager, { DEFAULT_REDIRECT_SETTINGS } from '@/utils/OidcConfiguration';

let promise: Promise<User | null> | null = null;

export function useToken() {
  const userStore = useUserStore();

  async function getOrRefreshToken() {
    const currentToken = userStore?.getToken();
    if (currentToken !== undefined && userStore?.validSession()) {
      return currentToken;
    }
    if (promise === null || (await promise)?.expired) {
      try {
        promise = oidcUserManager.signinSilent(DEFAULT_REDIRECT_SETTINGS);
        const user = await promise;
        if (user !== null) {
          userStore?.login(user);
          return user.access_token;
        }
      } catch {
        const user = await oidcUserManager.signinPopup(DEFAULT_REDIRECT_SETTINGS);
        if (user !== null) {
          userStore?.login(user);
          return user.access_token;
        }
      }
    } else {
      const user = await promise;
      if (user !== null) {
        return user.access_token;
      }
    }
    return '';
  }

  return { getOrRefreshToken };
}
