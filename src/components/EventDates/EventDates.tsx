import './eventDates.scss';
import * as React from 'react';

type Event = {
    eventName: string,
    eventDate: Date,
    eventLocation: string
}

type FilterOption = {
    name: string,
    number: number
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
    }, {
        eventName: "post-review full paper due",
        eventDate: new Date("2016-10-28"),
        eventLocation: "Deakin University Geelong Waterfront Campus Building D23"
    }
];

const filterOptions: Array<FilterOption> = [
    {name: "Upcoming", number: 3},
    {name: "Design", number: 10},
    {name: "Technology", number: 7},
    {name: "New innovations", number: 4}
];

function EventDates() {
    return (
        <div className="row">
            <p>The DesTech 2016 schedule is currently under development. The agenda will be published for desktop and mobile using the sched.org conference app. Please keep an eye on this website for information about the
                DesTech 2016 program.</p>
            <div className="events-filter col-12 col-sm-3 col-lg-3">
                <div className="filter-title">
                    <p>Filter</p>
                    <i className="fa fa-caret-down" />
                </div>
                <ul className="list-group">
                    <li className="list-group-item"><input type="checkbox" /> Item one</li>
                    <li className="list-group-item"><input type="checkbox" /> Item one</li>
                    <li className="list-group-item"><input type="checkbox" /> Item one</li>
                </ul>
            </div>
            <div className="events-container col-12 col-sm-9 col-lg-9">
                <ul className="list-group">
                    {
                        events.map((event) =>
                            <li className="event-item list-group-item" key={event.eventName}>
                                <div className="event-content">
                                    <p className="event-date">{event.eventDate.toDateString()}</p>
                                    <p className="event-name">{event.eventName}</p>
                                    <p className="event-location">{event.eventLocation}</p>
                                </div>
                                <i className="fas fa-caret-right"/>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default EventDates;