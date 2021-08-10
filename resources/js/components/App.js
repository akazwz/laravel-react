import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Homepage from "../pages/Homepage";
import TestPage from "../pages/TestPage";
import WorkReport from "../pages/WorkReport";


function App() {
    return (
        <Fragment>
            <Router>
                <Link to="/">home</Link> &ensp;
                <Link to="/test">test</Link> &ensp;
                <Link to="/work-report">work report</Link> &ensp;
                <Switch>
                    <Route path="/" exact component={Homepage}/>
                    <Route path="/test" exact component={TestPage}/>
                    <Route path="/work-report" exact component={WorkReport}/>
                </Switch>
            </Router>
        </Fragment>

    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}
