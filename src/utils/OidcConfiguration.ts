import { UserManager } from 'oidc-client-ts';

const url = window.location.origin + '/oidc-client';

export const OIDC_SETTINGS = {
  authority: 'https://sso.tuxfan.de/realms/master',
  client_id: 'link-list',
  redirect_uri: url + '/callback',
  post_logout_redirect_uri: url,
  filterProtocolClaims: true,
  scope: 'openid email profile',
  accessTokenExpiringNotificationTimeInSeconds: 20,
};
export const DEFAULT_REDIRECT_SETTINGS = {
  extraQueryParams: { kc_idp_hint: 'oidc' },
};
export default new UserManager(OIDC_SETTINGS);
