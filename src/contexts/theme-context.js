import React from 'react';
import { Appearance } from '../constants';
import { useSelector } from 'react-redux';

import type { FunctionComponent, ReactNode } from '@types/react';

export const ThemeContext = React.createContext(Appearance.automatic);

type Props = {
    children: ReactNode
}

const ThemeProvider = ({ children }: Props): FunctionComponent<Props> => {
    const { theme } = useSelector(state => state.mainReducer);

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = (): string => {
    const theme = React.useContext(ThemeContext);

    return React.useMemo(() => theme, [theme]);
};

export {
    ThemeProvider,
    useTheme
};
