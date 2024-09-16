import { AxiosError } from 'axios';
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';

import {
  emailCheck,
  emailVerification,
  login,
  signUp,
  SignUpRequest,
} from '@/apis/auth/post';
import { emailCodeAtom } from '@/stores/user/emailCodeAtom';
import { userTokenAtom } from '@/stores/user/tokenAtom';

import useToast from './useToast';

export const useUser = () => {
  const router = useRouter();

  const setUserToken = useSetAtom(userTokenAtom);
  const setEmailCode = useSetAtom(emailCodeAtom);
  const { addToast } = useToast();

  const userLogin = async (email: string, password: string) => {
    const res = await login(email, password);

    if ('accessToken' in res) {
      const accessToken = res.accessToken;
      localStorage.setItem('accessToken', accessToken);

      setUserToken((prev) => ({ ...prev, accessToken: res.accessToken }));
      return 'success';
    } else {
      addToast({
        message: res.errorMessage,
        iconType: 'error',
      });

      return 'error';
    }
  };

  const userEmailCheck = async (email: string, retry?: boolean) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      addToast({
        message: '올바른 이메일 주소를 입력해 주세요.',
        iconType: 'error',
      });

      return 'error';
    }

    const res = await emailCheck(email);

    if ('id' in res) {
      setEmailCode(res);

      addToast({
        message: retry
          ? '인증 메일을 다시 전송했어요.'
          : '인증 메일을 전송했어요.',
        iconType: 'success',
      });

      return 'success';
    } else {
      addToast({
        message: res.errorMessage,
        iconType: 'error',
      });

      return 'error';
    }
  };

  const userEmailVerification = async (emailId: string, code: string) => {
    const res = await emailVerification(emailId, code);

    if ('isVerified' in res && res.isVerified) {
      return 'success';
    } else {
      addToast({
        message: '인증번호를 다시 확인해주세요.',
        iconType: 'error',
      });

      return 'error';
    }
  };

  const userSignUp = async ({ emailId, password, nickname }: SignUpRequest) => {
    const res = await signUp({ emailId, password, nickname });

    if ('token' in res) {
      localStorage.setItem('accessToken', res.token);
      setUserToken((prev) => ({ ...prev, accessToken: res.token }));

      return 'success';
    } else {
      addToast({
        message: res.errorMessage,
        iconType: 'error',
      });

      return 'error';
    }
  };

  const userExpired = (error: AxiosError) => {
    if (typeof window === undefined) return;

    if (error.status === 401 || error.response?.status === 401) {
      router.push('/auth/login');
      localStorage.setItem('accessToken', '');
    }
    return;
  };

  return {
    userLogin,
    userEmailCheck,
    userEmailVerification,
    userSignUp,
    userExpired,
  };
};
