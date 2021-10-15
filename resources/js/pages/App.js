import React, {useEffect, useState} from 'react';
import GridLayout from './GridLayout';
import * as ReactDOM from "react-dom";
import '../../css/work-report.css';

const App = () => {
    return (
        <>
            <GridLayout/>
        </>
    );
}

export default App;


if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
