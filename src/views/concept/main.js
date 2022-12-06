/*globals item,index*/
import React from 'react';
import type { FunctionComponent } from '@types/react';

export default function ConceptMain(): FunctionComponent {
    return (
        <section className="concept-main-container">

            <section className="main-wrapper" style={{flex:1}}>
                <div className="overlay">
                    <div className="bg-image">
                        <h1 style={{ fontSize: 100, display: 'block' }}>Last page</h1>
                    </div>
                </div>
            </section>
        </section>
    );
}
