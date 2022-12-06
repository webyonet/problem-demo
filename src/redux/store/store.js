import { combineReducers, legacy_createStore as createStore } from 'redux';
import { mainReducer } from '../reducer/reducer';
import type { State } from '../reducer/reducer';

type Store = {
    mainReducer: State
}

const allReducers: Store = {
    mainReducer
};

const rootReducer: Store = combineReducers(allReducers);

export const store: Store = createStore(rootReducer);
