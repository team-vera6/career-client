import { useSetAtom } from 'jotai';

import { login } from '@/apis/auth/post';
import { userTokenAtom } from '@/stores/user/tokenAtom';

import useToast from './useToast';

export const useUser = () => {
  const setUserToken = useSetAtom(userTokenAtom);
  const { addToast } = useToast();

  // login
  const userLogin = async (email: string, password: string) => {
    const res = await login(email, password);

    if ('accessToken' in res) {
      setUserToken((prev) => ({ ...prev, accessToken: res.accessToken }));
      return 'success';
    } else if ('errorMessage' in res) {
      addToast({
        message: res.errorMessage,
        iconType: 'error',
      });
    }
    return 'error';
  };

  return { userLogin };
};
