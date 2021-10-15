import React, {useEffect, useState} from 'react';
import GridLayout from './GridLayout';
import * as ReactDOM from "react-dom";
import '../../css/work-report.css';
import {getWorkReportDataApi} from "../components/Api/workreport";

const App = () => {
    useEffect(() => {
        getWorkReportDataApi().then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }, []);
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
