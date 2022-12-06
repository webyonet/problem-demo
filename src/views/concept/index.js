import React from 'react';
import type { FunctionComponent } from '@types/react';

import { useSetAppearance, useTimeout } from '../../utility/use-util';
import { TimeSpan } from '../../utility/time-span';
import { useNavigate } from 'react-router-dom';
import { NavigationPath } from '../../router/navigation-path';
import { Appearance } from '../../constants';

export default function ConceptSplash(): FunctionComponent {
    const navigate = useNavigate();

    useSetAppearance(Appearance.dark, TimeSpan.milliSecond.oneHundred);

    useTimeout((): void => {
        navigate(NavigationPath.conceptMainPage);
    }, TimeSpan.seconds.two);

    return (
        <section className="concept-splash-main-container">
            <h1>Loading page.....</h1>
        </section>
    );
}
