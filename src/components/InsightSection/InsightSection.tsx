import './insightSection.scss';
import * as React from 'react';
import { useState, useEffect } from "react";
import type { Insight, InsightJson } from "../../entities/Insight";

function InsightSection() {

    const [insights, setInsights] = useState<Array<Insight> | undefined>(undefined);

    useEffect(() => {
        fetchInsightsData()
            .catch(e => {
                console.log(e);
            })
    });

    async function fetchInsightsData() {
        const response = await fetch("data/insights-data.json");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonResponse: InsightJson = await response.json();

        // Simulate fetching
        setTimeout(() => {
            const insightsData: Array<Insight> = jsonResponse.insights.map((insight) => {
                return {
                    title: insight.title,
                    img: insight.img
                }
            });

            setInsights(insightsData);
        }, 2000);
    }

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