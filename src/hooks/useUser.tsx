import { useSetAtom } from 'jotai';

import { login } from '@/apis/auth/login';
import { userTokenAtom } from '@/stores/user/accessTokenAtom';

import useToast from './useToast';

export const useUser = () => {
  const setUserToken = useSetAtom(userTokenAtom);
  const { addToast } = useToast();

  // login
  const userLogin = async (email: string, password: string) => {
    const result = await login(email, password);

    if (result.accessToken) {
      setUserToken((prev) => ({ ...prev, accessToken: result.accessToken }));
      return 'success';
    } else if (result.errorMessage) {
      addToast({
        message: result.errorMessage,
        iconType: 'error',
      });
    }
    return 'error';
  };

  return { userLogin };
};
