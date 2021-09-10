import {Insight, InsightJson} from "../entities/Insight";

async function fetchInsightsDataUseCase(): Promise<Array<Insight>> {
    const response = await fetch("data/insightsData.json");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    const insightsJsonData: Array<InsightJson> = jsonResponse.insights;

    const insightsData: Array<Insight> = insightsJsonData.map((insight) => {
        return {
            title: insight.title,
            img: insight.img,
            date: new Date(insight.date)
        }
    });

    return insightsData;
}

export default fetchInsightsDataUseCase;