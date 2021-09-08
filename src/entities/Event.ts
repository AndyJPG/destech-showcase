// Event Interface
interface EventInterface {
    readonly eventId: string;
    readonly eventName: string;
    readonly eventDate: Date;
    readonly eventLocation: string;
    readonly category: Array<string>;
}

// Event json datatype
type EventJson = {
    eventId: string,
    eventName: string,
    eventDate: string,
    eventLocation: string,
    category: Array<string>
};

// Event class
class Event implements EventInterface {
    eventId: string;
    eventName: string;
    eventDate: Date;
    eventLocation: string;
    category: Array<string>;

    constructor(event: EventJson) {
        this.eventId = event.eventId;
        this.eventName = event.eventName;
        this.eventDate = new Date(event.eventDate);
        this.eventLocation = event.eventLocation;
        this.category = event.category;
    }
}

export { Event };

// Type for event filter
type FilterOption = {
    name: string,
    number: number,
    checked: boolean
}

// Type of events json data return
type EventAndFilterJson = {
    filterOptions: Array<{
        name: string,
        number: number,
        checked: boolean
    }>,
    events: Array<EventJson>
}

export type { FilterOption, EventAndFilterJson };