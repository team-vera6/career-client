import { atom } from 'jotai';

import { UserDetail } from '@/apis/user/get';

export const userInfoAtom = atom<UserDetail>({
  email: '',
  nickname: '',
});
