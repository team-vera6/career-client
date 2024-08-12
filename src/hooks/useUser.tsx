import { useSetAtom } from 'jotai';

import { login } from '@/apis/auth/login';
import { accessTokenAtom } from '@/stores/user/accessTokenAtom';

import useToast from './useToast';

export const useUser = () => {
  const SetAccessToken = useSetAtom(accessTokenAtom);
  const { addToast } = useToast();

  // login
  const userLogin = async (email: string, password: string) => {
    const result = await login(email, password);

    if (result.accessToken) {
      SetAccessToken(result.accessToken);
      return 'success';
    } else if (result.errorMessage) {
      addToast({
        message: result.errorMessage,
        iconType: 'error',
      });
    }
    return 'error';
  };

  return userLogin;
};
