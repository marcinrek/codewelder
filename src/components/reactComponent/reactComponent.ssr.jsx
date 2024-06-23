import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ReactComponent} from './components/ReactComponent';

const serverCall = async (args) => {
    return await ReactDOMServer.renderToString(<ReactComponent {...args} />);
};

export default serverCall;
