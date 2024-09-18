import { typedPut } from '..';

export const changeNickname = async (nickname: string) => {
  const response = typedPut('/auth/nickname', { nickname });
  return response;
};
