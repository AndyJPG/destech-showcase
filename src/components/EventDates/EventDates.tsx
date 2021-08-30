import './eventDates.scss';
import * as React from 'react';

type Event = {
    eventName: string,
    eventDate: Date,
    eventLocation: string
}

const events: Array<Event> = [
    {
        eventName: "full papers due",
        eventDate: new Date("2016-09-09"),
        eventLocation: "Deakin University Geelong Waterfront Campus Building K1"
    },
    {
        eventName: "full paper notification",
        eventDate: new Date("2016-09-30"),
        eventLocation: "Deakin University Melbourne Burwood Campus Building U6"
    },{
        eventName: "post-review full paper due",
        eventDate: new Date("2016-10-28"),
        eventLocation: "Deakin University Geelong Waterfront Campus Building D23"
    }
];

function EventDates() {
    return (
        <div className="row">
            <div className="events-container col-lg-5">
                <ul className="list-group">
                    {
                        events.map((event) =>
                            <li className="event-item list-group-item" key={event.eventName}>
                                <div className="event-content">
                                    <p className="event-date">{event.eventDate.toDateString()}</p>
                                    <p className="event-name">{event.eventName}</p>
                                    <p className="event-location">{event.eventLocation}</p>
                                </div>
                                <i className="fas fa-caret-right" />
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