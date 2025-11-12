import type { User, UserProfile } from 'oidc-client-ts';
import { type InjectionKey, ref } from 'vue';

export const USER_STORE_KEY = Symbol('user') as InjectionKey<{
  login: (data: User) => void;
  validSession: () => boolean;
  getToken: () => string | undefined;
  getUid: () => string | undefined;
  getProfile: () => UserProfile | undefined;
}>;

export function useUserStore() {
  const user = ref<User | null>(null);
  const validSession = () => {
    return user.value !== null && !user.value.expired;
  };
  const getToken = () => user.value?.access_token;
  const getUid = () => user.value?.profile.preferred_username;
  const login = (data: User) => {
    user.value = data;
  };
  const getProfile = () => user.value?.profile;

  return {
    login,
    validSession,
    getToken,
    getUid,
    getProfile,
  };
}
