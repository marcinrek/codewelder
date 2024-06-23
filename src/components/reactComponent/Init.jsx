import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import {ReactComponent} from './components/ReactComponent';

export const init = () => {
    console.log('ReactComponent init() called');

    [...document.querySelectorAll('.reactComponent')].map((node) => {
        const props = JSON.parse(node.dataset.props);
        hydrateRoot(node, <ReactComponent {...props} />);
    });
};
