import './insightSection.scss';
import * as React from 'react';
import { useState, useEffect } from "react";
import type { Insight } from "../../entities/Insight";
import fetchInsightsDataUseCase from "../../useCase/fetchInsightsDataUseCase";

function InsightSection() {

    const [insights, setInsights] = useState<Array<Insight> | undefined>(undefined);

    useEffect(() => {
        if (insights === undefined) {

            // Simulate fetching delay
            setTimeout(() => {
                fetchInsightsDataUseCase()
                    .then((insightsData: Array<Insight>) => {
                        setInsights(insightsData)
                    })
                    .catch(err => console.log(err));
            }, 2000);

        }
    });

    return (
        <div className="row insights-container">
            {
                insights != undefined ?
                insights.map((insight) => {
                    return (
                        <div className="card col-sm-6 col-lg-4" key={insight.title}>
                            <img className="card-img-top" src={insight.img} alt="insight"/>
                            <div className="card-body">
                                <h5 className="card-title">{insight.title}</h5>
                            </div>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}

export default InsightSection;