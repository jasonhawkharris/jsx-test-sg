import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './TestComponents/Grid';
import Foo from './TestComponents/Foo';

const App = () => {
    return (
        <div>
            <h1>Hello there!</h1>
            <Grid xs="XS!!!">
                <ul>
                    <li>I am a child</li>
                    <li>me too</li>
                    <li>me three</li>
                </ul>
                <Foo xs="XS!!!" />
            </Grid>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);