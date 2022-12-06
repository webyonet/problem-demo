import { store } from '../redux/store/store';

const { useRef, useEffect } = require('react');

import { setTheme } from '../redux/action/action';

type Callback = () => void;
type Dependency = Array<any>;

export const useSetAppearance = (theme: string, delay: number): void => {
    useEffect((): void => {
        if (theme) {
            if (delay) {
                setTimeout((): void => {
                    store.dispatch(setTheme(theme));
                }, delay);
            } else {
                store.dispatch(setTheme(theme));
            }
        }
    }, [theme]);
};

export const useTimeout = (callback: Callback, delay: number, dependency: Dependency = [], forceEnd: boolean): number => {
    const savedCallback = useRef();
    const clear = useRef();

    if (forceEnd) {
        clearInterval(clear.current);
    }

    useEffect((): void => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect((): void => {
        const trigger = (): void => {
            savedCallback.current();
        };

        if (delay !== null) {
            clear.current = setTimeout(trigger, delay);
            return () => clearTimeout(clear.current);
        }
    }, [delay, ...dependency]);

    return clear.current;
};
