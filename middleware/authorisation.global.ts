import { useAuthorisationToken } from '~/composables/state/useAuthorisation';

export default defineNuxtRouteMiddleware((to) => {
  const token = useAuthorisationToken();
  if (/(console)/.test(to.path) && !/^\/console\/accounts\/(login|register)/.test(to.path) && !token.value) {
    return navigateTo('/console/accounts/login');
  }
});
