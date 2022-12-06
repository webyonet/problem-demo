import React from 'react';
import moment from 'moment';
import { HashRouter } from 'react-router-dom';
import Router from './router';

import type { FunctionComponent } from '@types/react';

import './assets/reset.scss';
import { useTheme } from './contexts/theme-context';
import classNames from 'classnames';

export default function App(): FunctionComponent {
    moment.locale('tr');
    const theme = useTheme();

    return (
        <main className={classNames('theme-container', theme)}>
            <HashRouter>
                <Router/>
            </HashRouter>
        </main>
    );
}
