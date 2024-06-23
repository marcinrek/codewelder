import render from 'preact-render-to-string';
import {h} from 'preact';
import {PreactComponent} from './components/PreactComponent';

const serverCall = async (args) => {
    return await render(<PreactComponent {...args} />);
};

export default serverCall;
