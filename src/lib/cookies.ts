import Cookies from 'universal-cookie'

const cookies = new Cookies();

export const getToken = (): string => {
  return cookies.get('@futurest/token');
};

export const setToken = (token: string) => {
  cookies.set('@futurest/token', token, {
    path: '/',
  });
};

export const removeToken = () => {
  return cookies.remove('@futurest/token');
};

export const getRememberedEmail = (): string | undefined => {
  return cookies.get('@futurest/rememberedEmail');
};

export const getRememberedPassword = (): string | undefined => {
  return cookies.get('@futurest/rememberedPassword');
};

export const setRememberedCredentials = (email: string, password: string) => {
  cookies.set('@futurest/rememberedEmail', email, {
    path: '/',
  });
  cookies.set('@futurest/rememberedPassword', password, {
    path: '/',
  });
};

export const removeRememberedCredentials = () => {
  cookies.remove('@futurest/rememberedEmail', {
    path: '/',
  });
  cookies.remove('@futurest/rememberedPassword', {
    path: '/',
  });
};
