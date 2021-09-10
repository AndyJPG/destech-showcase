// Event type
type Event = {
    eventId: string,
    eventName: string,
    eventDate: Date,
    eventLocation: string,
    category: Array<string>
}

// Event Json data
type EventJson = {
    eventId: string,
    eventName: string,
    eventDate: string,
    eventLocation: string,
    category: Array<string>
}

// Type for event filter
type FilterOption = {
    name: string,
    number: number,
    checked: boolean
}

export type { Event, EventJson, FilterOption };