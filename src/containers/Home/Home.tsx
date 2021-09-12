import * as React from "react";

import HeroImage from "../../components/HeroImage/HeroImage";
import ChairManSection from "../../components/ChairManSection/ChairManSection";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import EventDates from "../../components/EventDates/EventDates";
import InsightSection from "../../components/InsightSection/InsightSection";
import NewsLetterSection from "../../components/NewsLetterSection/NewsLetterSection";

function Home() {
    return (
        <div>
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
        </div>
    )
}

export default Home;