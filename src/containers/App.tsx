import * as React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Home from "./Home/Home";
import NotFound404 from "./NotFound404/NotFound404";
import PageContainer from "./PageContainer/PageContainer";

class App extends React.Component<any, any> {
    render(): React.ReactNode {
        return (
            <div className="whole-content-container container-fluid">
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/">
                            <PageContainer>
                                <Home/>
                            </PageContainer>
                        </Route>
                        <Route path="/404">
                            <PageContainer>
                                <NotFound404/>
                            </PageContainer>
                        </Route>
                        <Route path="*">
                            <PageContainer>
                                <NotFound404/>
                            </PageContainer>
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;