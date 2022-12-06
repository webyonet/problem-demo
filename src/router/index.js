import React, { lazy, Suspense, useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import SlideRoutes from 'react-slide-routes';
import type { FunctionComponent } from '@types/react';
import { TimeSpan } from '../utility/time-span';
import { NavigationPath } from './navigation-path';

import Dashboard from '../views/dashboard';
import { store } from '../redux/store/store';
import { setTheme } from '../redux/action/action';
import { Appearance } from '../constants';

import ConceptSplash from '../views/concept';
import ConceptMainPage from '../views/concept/main';

export default function Router(): FunctionComponent {
    const location = useLocation();

    useEffect((): void => {
        if (location.pathname === '/') {
            store.dispatch(setTheme(Appearance.light));
        }
    }, [location]);

    return (
        <SlideRoutes duration={TimeSpan.milliSecond.threeHundredFifty} destroy={true} timing="ease-in-out" animation="slide">
            <Route index={true} path={NavigationPath.dashboard} element={<Dashboard/>}/>
            <Route path={NavigationPath.conceptSplashPage} element={<ConceptSplash/>}/>
            <Route path={NavigationPath.conceptMainPage} element={<ConceptMainPage/>}/>
        </SlideRoutes>
    );
}
