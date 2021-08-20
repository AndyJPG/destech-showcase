import * as React from 'react';
import './App.css';

import Navbar from "../components/Navbar/Navbar";
import HeroImage from "../components/HeroImage/HeroImage";
import ChairManSection from "../components/ChairManSection/ChairManSection";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import EventDates from "../components/EventDates/EventDates";

class App extends React.Component<any, any>{
    render(): React.ReactNode {
        return (
            <div className="whole-content-container container-fluid">
                <Navbar/>
                <HeroImage/>
                <ChairManSection/>
                <SectionContainer sectionTitle="important dates">
                    <EventDates/>
                </SectionContainer>
            </div>
        )
    }
}

export default App;