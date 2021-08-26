import * as React from "react";

import Navbar from "../../components/Navbar/Navbar";
import HeroImage from "../../components/HeroImage/HeroImage";
import ChairManSection from "../../components/ChairManSection/ChairManSection";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import EventDates from "../../components/EventDates/EventDates";
import InsightSection from "../../components/InsightSection/InsightSection";
import NewsLetterSection from "../../components/NewsLetterSection/NewsLetterSection";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <div>
            <Navbar/>
            <HeroImage/>
            <ChairManSection/>
            <SectionContainer sectionTitle="important dates">
                <EventDates/>
            </SectionContainer>
            <SectionContainer sectionTitle="destech insights">
                <InsightSection/>
            </SectionContainer>
            <SectionContainer>
                <NewsLetterSection/>
            </SectionContainer>
            <Footer/>
        </div>
    )
}

export default Home;