import { typedGet } from '..';

interface UserDetail {
  email: string;
  nickname: string;
}

export const getUserDetail = async () => {
  const response = await typedGet<UserDetail>('/auth/user');
  return response;
};
