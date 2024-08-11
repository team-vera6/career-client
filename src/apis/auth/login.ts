import { typedPost } from '..';

type LoginResponseType = Awaited<typeof login>;

export const login = (email: string, password: string) => {
  return typedPost<LoginResponseType>('/auth/sign-in', { email, password });
};
