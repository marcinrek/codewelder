import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

export const ReactComponent = (props) => {
    const [pageRendered, setPageRendered] = useState(false);

    useEffect(() => {
        setPageRendered(true);
    }, []);

    return (
        <>
            <p>Scaffold component. This component contains a hydration example.</p>
            {pageRendered && <p className="p-3 bg-slate-700 text-white inline-flex">↪ This gets injected with useEffect on page render.↩</p>}
            <button
                onClick={() => {
                    alert(new Date());
                }}
            >
                Show Date
            </button>

            <p>All props:</p>
            <pre>
                <code>{JSON.stringify(props, null, 2)}</code>
            </pre>
        </>
    );
};

ReactComponent.propTypes = {
    _: PropTypes.object,
};
