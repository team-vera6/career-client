import { useSetAtom } from 'jotai';

import {
  emailCheck,
  EmailCheckResponse,
  emailVerification,
  login,
  signUp,
  SignUpResponse,
} from '@/apis/auth/post';
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
      const accessToken = res.accessToken;
      localStorage.setItem('accessToken', accessToken);

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

  // emailCodeCheck
  const userEmailVerification = async (emailId: string, code: string) => {
    const res = await emailVerification(emailId, code);

    if ('isVerified' in res && res.isVerified) {
      return 'success';
    } else {
      addToast({
        message: '인증번호를 다시 확인해주세요.',
        iconType: 'error',
      });
    }
    return 'error';
  };

  // sign-up
  const userSignUp = async ({
    emailId,
    password,
    nickname,
  }: SignUpResponse) => {
    const res = await signUp({ emailId, password, nickname });

    if ('token' in res) {
      setUserToken((prev) => ({ ...prev, accessToken: res.token as string }));
      return 'success';
    } else if ('errorMessage' in res) {
      addToast({
        message: res.errorMessage,
        iconType: 'error',
      });
    }
    return 'error';
  };

  return { userLogin, userEmailCheck, userEmailVerification, userSignUp };
};
