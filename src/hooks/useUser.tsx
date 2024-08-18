import { useSetAtom } from 'jotai';

import { emailCheck, EmailCheckResponse, login } from '@/apis/auth/post';
import { emailCodeAtom } from '@/stores/user/emailCodeAtom';
import { userTokenAtom } from '@/stores/user/tokenAtom';

import useToast from './useToast';

export const useUser = () => {
  const setUserToken = useSetAtom(userTokenAtom);
  const setEmailCode = useSetAtom(emailCodeAtom);
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

  // emailCheck
  const userEmailCheck = async (email: string) => {
    const res = await emailCheck(email);

    if ('id' in res) {
      setEmailCode(res as EmailCheckResponse);
      addToast({
        message: '인증 메일을 전송했어요.',
        iconType: 'success',
      });

      return 'success';
    } else if ('errorMessage' in res) {
      addToast({
        message: res.errorMessage,
        iconType: 'error',
      });
    }

    return 'error';
  };

  return { userLogin, userEmailCheck };
};
