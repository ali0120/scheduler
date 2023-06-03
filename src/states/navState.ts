import { atom } from 'recoil';

export const openedState = atom<boolean>({
  key: 'openedState',
  default: false,
});
