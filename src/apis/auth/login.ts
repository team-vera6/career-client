import { typedPost } from '..';
import { ErrorResponseType } from './../../types/apis';

export const LOGIN_ERROR_MESSAGE: Record<string, string> = {
  incorrect_password: '비밀번호가 일치하지 않습니다.',
  resource_not_found: '이메일을 확인해주세요.',
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
    const error = err as ErrorResponseType;

    if ((error.code as string) && LOGIN_ERROR_MESSAGE[error.code]) {
      return { errorMessage: LOGIN_ERROR_MESSAGE[error.code] };
    }
    return { errorMessage: 'Unknown error' };
  }
};
