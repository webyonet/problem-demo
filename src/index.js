import 'core-js/stable';
import 'moment/min/locales';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { osName } from 'react-device-detect';

import App from './App';
import { store } from './redux/store/store';
import { ThemeProvider } from './contexts/theme-context';

if (osName === 'Windows') {
    document.body.classList.add(osName.toLowerCase());
}

const container = document.getElementById('app');

const root = ReactDOM.createRoot(container);

root.render(
    <Provider store={store}>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </Provider>
);
