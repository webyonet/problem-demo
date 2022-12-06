import { THEME } from '../constants/action-types';

type Action = {
    type: string,
    payload: any
};

export type State = {
    theme: string,
};

const initialState: State = {
    theme: 'light',
    sideBar: null,
};

export const mainReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case THEME:
            return { ...state, theme: action.payload };
        default:
            return state;
    }
};
