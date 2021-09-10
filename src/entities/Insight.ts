// Type for insight
type Insight = {
    img: string,
    title: string,
    date: Date
}

// Type for insight return json
type InsightJson = {
    img: string,
    title: string,
    date: string
}

export type { Insight, InsightJson };