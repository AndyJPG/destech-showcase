import * as React from 'react';
import './App.css';

import Navbar from "../components/Navbar/Navbar";
import HeroImage from "../components/HeroImage/HeroImage";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <div className="container-fluid" style={{ border : "1px solid black"}}>
                <Navbar/>
                <HeroImage/>
            </div>
        )
    }
}

export default App;