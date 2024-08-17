import { atom } from 'jotai';

export const userTokenAtom = atom({
  accessToken: '',
  refreshToken: '',
});
