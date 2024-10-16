import { ErrorResponseType } from '../../types/apis';
import { typedPost } from '..';
import { LOGIN_ERROR_MESSAGE } from './constants';

// 공통 error 리턴
const returnError = (err: unknown) => {
  const error = err as ErrorResponseType;

  if (LOGIN_ERROR_MESSAGE[error.code]) {
    return { errorMessage: LOGIN_ERROR_MESSAGE[error.code] };
  }
  return { errorMessage: 'Unknown error' };
};

export const login = async (email: string, password: string) => {
  try {
    const res = await typedPost<{ accessToken: string }>('/auth/sign-in', {
      email,
      password,
    });
    return res;
  } catch (err) {
    return returnError(err);
  }
};

export interface EmailCheckResponse {
  id: string;
  email: string;
}

export const emailCheck = async (email: string) => {
  try {
    const res = await typedPost<EmailCheckResponse>('/auth/email', {
      email,
    });
    return res;
  } catch (err) {
    return returnError(err);
  }
};

export interface EmailVerificationResponse {
  emailId: string;
  isVerified: boolean;
}

export const emailVerification = async (emailId: string, code: string) => {
  try {
    const res = await typedPost<EmailVerificationResponse>(
      '/auth/email/verification',
      {
        emailId,
        code,
      },
    );
    return res;
  } catch (err) {
    return returnError(err);
  }
};

export interface SignUpRequest {
  emailId: string;
  password: string;
  nickname: string;
}

export interface SignUpResponse {
  email: string;
  token: string;
}

export const signUp = async ({
  emailId,
  password,
  nickname,
}: SignUpRequest) => {
  try {
    const res = await typedPost<SignUpResponse>('/auth/sign-up', {
      emailId,
      password,
      nickname,
    });
    return res;
  } catch (err) {
    return returnError(err);
  }
};
