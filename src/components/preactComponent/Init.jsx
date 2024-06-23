import 'preact/debug';
import {h} from 'preact';
import {PreactComponent} from './components/PreactComponent';
import {hydrate} from 'preact-iso';

export const init = () => {
    console.log('preactComponent init() called');

    [...document.querySelectorAll('.preactComponent')].map((node) => {
        const props = JSON.parse(node.dataset.props);
        hydrate(<PreactComponent {...props} />, node);
    });
};
