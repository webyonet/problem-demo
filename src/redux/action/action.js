import { THEME } from '../constants/action-types';

type StoreSetter = (payload: any) => void;

export const setTheme: StoreSetter = payload => ({ type: THEME, payload });
