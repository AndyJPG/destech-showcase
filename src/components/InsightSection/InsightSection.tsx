import './insightSection.scss';
import * as React from 'react';
import {useState, useEffect} from "react";
import type {Insight} from "../../entities/Insight";
import fetchInsightsDataUseCase from "../../useCase/fetchInsightsDataUseCase";
import {Link} from "react-router-dom";

function InsightSection() {

    const [insights, setInsights] = useState<Array<Insight> | undefined>(undefined);

    useEffect(() => {
        if (insights === undefined) {

            // Simulate fetching delay
            // setTimeout(() => {
            //     fetchInsightsDataUseCase()
            //         .then((insightsData: Array<Insight>) => {
            //             setInsights(insightsData)
            //         })
            //         .catch(err => console.log(err));
            // }, 2000);

            fetchInsightsDataUseCase()
                .then((insightsData: Array<Insight>) => {
                    setInsights(insightsData)
                })
                .catch(err => console.log(err));

        }
    });

    return (
        <div className="row insights-container">
            {
                insights != undefined ?
                    insights.map((insight) => {
                        return (
                            <div className="card-container col-sm-6 col-md-4 col-lg-3" key={insight.title}>
                                <div className="card">
                                    <div className="card-img-container" style={{
                                        background: `url(${insight.img})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{insight.title}</h5>
                                    </div>
                                    <div className="card-footer">
                                        <hr/>
                                        <small className="text-muted">Posted
                                            on {insight.date.toLocaleDateString()}</small>
                                    </div>
                                </div>


                            </div>
                        )
                    }) : null
            }
        </div>
    )
}

export default InsightSection;