import type { Event, EventJson, FilterOption } from "../entities/Event";

async function fetchEventsUseCase(): Promise<{events: Array<Event>, eventFilter: Array<FilterOption>}>{
    const response = await fetch("data/eventsData.json");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    const eventsJsonData: Array<EventJson> = jsonResponse.events;

    const eventsData: Array<Event> = eventsJsonData.map((event: EventJson) => {
        return {
            eventId: event.eventId,
            eventName: event.eventName,
            eventDate: new Date(event.eventDate),
            eventLocation: event.eventLocation,
            category: event.category
        };
    });

    const filterOptionData: Array<FilterOption> = jsonResponse.filterOptions;

    return {events: eventsData, eventFilter: filterOptionData};
}

export default fetchEventsUseCase;