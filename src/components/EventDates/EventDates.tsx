import './eventDates.scss';
import * as React from 'react';

type Event = {
    eventName: string,
    eventDate: Date
}

const events: Array<Event> = [
    {
        eventName: "full papers due",
        eventDate: new Date("2016-09-09")
    },
    {
        eventName: "full paper notification",
        eventDate: new Date("2016-09-30")
    },{
        eventName: "post-review full paper due",
        eventDate: new Date("2016-10-28")
    }
];

function EventDates() {
    return (
        <div className="row">
            <div className="events-container col-lg-5">
                EventDates
                <ul className="list-group">
                    {
                        events.map((event) =>
                            <li className="event-item list-group-item" key={event.eventName}>
                                <p>{event.eventDate.toDateString()}</p>
                                <p>{event.eventName}</p>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="event-element col-lg-7">
                Event Element
                <img className="img-fluid" src="" alt="Event element" />
            </div>
        </div>
    )
}

export default EventDates;