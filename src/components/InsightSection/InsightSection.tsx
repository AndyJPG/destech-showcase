import './insightSection.scss';
import * as React from 'react';

type Insight = {
    img: string,
    title: string
}

function InsightSection() {

    const insights: Array<Insight> = [
        { img: "assets/img/hero-image.jpg", title: "2016 keynote news" },
        { img: "assets/img/hero-image.jpg", title: "proceedings, publishing & indexing"},
        { img: "assets/img/hero-image.jpg", title: "some of last year's highlights" }
    ]

    return (
        <div className="row insights-container">
            {
                insights.map((insight) => {
                    return (
                        <div className="card col-sm-6 col-lg-4" key={insight.title}>
                            <img className="card-img-top" src={insight.img} alt="insight"/>
                            <div className="card-body">
                                <h5 className="card-title">{insight.title}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default InsightSection;