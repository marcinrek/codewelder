import {h, Fragment} from 'preact';
import {useState, useEffect} from 'preact/hooks';
import PropTypes from 'prop-types';

export const PreactComponent = (props) => {
    const [pageRendered, setPageRendered] = useState(false);

    useEffect(() => {
        setPageRendered(true);
    }, []);

    return (
        <Fragment>
            <p>Scaffold component. This component contains a hydration example.</p>
            {pageRendered && <p className="p-3 bg-slate-700 text-white inline-flex">↪ This gets injected with useEffect on page render.↩</p>}
            <button
                onClick={() => {
                    alert(new Date());
                }}
            ></button>

            <p>All props:</p>
            <pre>
                <code>{JSON.stringify(props, null, 2)}</code>
            </pre>
        </Fragment>
    );
};

PreactComponent.propTypes = {
    _: PropTypes.object,
};
