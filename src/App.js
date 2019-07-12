import React, {Component} from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Homepage from "./__components/homepage/Homepage";
export const history = createBrowserHistory();


export default class App extends Component {
    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                </Switch>
            </Router>
        );
    }
}