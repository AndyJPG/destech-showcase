import {Insight, InsightJson} from "../entities/Insight";

async function fetchInsightsDataUseCase(): Promise<Array<Insight>> {
    const response = await fetch("data/insights-data.json");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse: InsightJson = await response.json();

    const insightsData: Array<Insight> = jsonResponse.insights.map((insight) => {
        return {
            title: insight.title,
            img: insight.img
        }
    });

    return insightsData;
}

export default fetchInsightsDataUseCase;