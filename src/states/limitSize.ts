import { atom } from 'recoil';

export const limitState = atom<number>({
  key: 'limitstate',
  default: 25,
});
