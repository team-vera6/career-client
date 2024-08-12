import { typedPost } from '..';

export const LOGIN_ERROR_MESSAGE: Record<string, string> = {
  incorrect_password: '비밀번호가 일치하지 않습니다.',
  invalid_request: '이메일을 확인해주세요.',
};

export const login = async (email: string, password: string) => {
  return typedPost<{ accessToken: string }>('/auth/sign-in', {
    email,
    password,
  })
    .then((res) => {
      const accessToken = res.accessToken;
      localStorage.setItem('accessToken', accessToken);
      return { accessToken: accessToken };
    })
    .catch((err) => {
      if ((err.code as string) && LOGIN_ERROR_MESSAGE[err.code]) {
        return { errorMessage: LOGIN_ERROR_MESSAGE[err.code] };
      }
      return err;
    });
};
