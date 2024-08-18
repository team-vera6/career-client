import { ErrorResponseType } from '../../types/apis';
import { typedPost } from '..';

export const LOGIN_ERROR_MESSAGE: Record<string, string> = {
  incorrect_password: '이메일 또는 비밀번호를 다시 확인해 주세요.',
  resource_not_found: '올바른 이메일 주소를 입력해 주세요.',
  already_exist_email: '이미 등록된 이메일입니다.',
};

// 공통 error 리턴
const returnError = (err: unknown) => {
  const error = err as ErrorResponseType;

  if ((error.code as string) && LOGIN_ERROR_MESSAGE[error.code]) {
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

    const accessToken = res.accessToken;
    localStorage.setItem('accessToken', accessToken);

    return { accessToken: accessToken };
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
    return typedPost<EmailCheckResponse>('/auth/email', {
      email,
    });
  } catch (err) {
    return returnError(err);
  }
};
