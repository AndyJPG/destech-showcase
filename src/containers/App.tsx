import * as React from 'react';
import './App.css';

import Navbar from "../components/Navbar/Navbar";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <div className="container-lg" style={{ border : "1px solid black"}}>
                <Navbar/>
            </div>
        )
    }
}

export default App;