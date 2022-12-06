import React from 'react';
import type { FunctionComponent } from '@types/react';

import { useNavigate } from 'react-router-dom';
import { NavigationPath } from '../../router/navigation-path';

export default function Dashboard(): FunctionComponent {
    const navigate = useNavigate();

    return (
        <section style={{ background: 'red' }} className="dashboard-main-container">
            <h1 style={{ fontSize: 100, display: 'block' }}>First page</h1>
            <a onClick={() => navigate(NavigationPath.conceptSplashPage)}>next page</a>
        </section>
    );
}
