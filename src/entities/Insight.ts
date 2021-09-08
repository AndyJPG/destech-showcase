// Type for insight
type Insight = {
    img: string,
    title: string
}

// Type for insight return json
type InsightJson = {
    insights: Array<Insight>
}

export type { Insight, InsightJson };