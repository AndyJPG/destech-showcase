import * as React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Authors from "./Authors/Authors";
import Home from "./Home/Home";

class App extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div className="whole-content-container container-fluid">
                <Router>
                    <Switch>
                        <Route path="/authors">
                            <Authors/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;