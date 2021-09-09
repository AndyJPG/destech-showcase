import type { Event, EventJson, FilterOption } from "../entities/Event";

async function fetchEventsUseCase(): Promise<[Array<Event>, Array<FilterOption>]>{
    const response = await fetch("data/eventsData.json");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    const eventsData: Array<Event> = jsonResponse.events.map((event: EventJson) => {
        return {
            eventId: event.eventId,
            eventName: event.eventName,
            eventDate: new Date(event.eventDate),
            eventLocation: event.eventLocation,
            category: event.category
        };
    });

    const filterOptionData: Array<FilterOption> = jsonResponse.filterOptions;

    return [eventsData, filterOptionData];
}

export default fetchEventsUseCase;