import './eventDates.scss';
import * as React from 'react';
import { useState } from 'react';

type Event = {
    eventName: string,
    eventDate: Date,
    eventLocation: string
}

type FilterOption = {
    name: string,
    number: number,
    checked: boolean
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

function EventDates() {

    const [filterOptions, setFilterOptions] = useState<Array<FilterOption>>(
        [
            {name: "all", number: 10, checked: false},
            {name: "upcoming", number: 3, checked: true},
            {name: "design", number: 10, checked: false},
            {name: "technology", number: 7, checked: false},
            {name: "new innovations", number: 4, checked: false}
        ]
    );

    const [showFilter, setShowFilter] = useState(true);

    function checkboxHandler(name: string) {
        let newFilterOptions = [...filterOptions];
        if (name === "all") {
            newFilterOptions.forEach((option) => {
                if (option.name === name) {
                    option.checked = !option.checked;
                } else {
                    option.checked = false;
                }
            });
        } else {
            newFilterOptions.forEach((option) => {
                if (option.name === name) {
                    option.checked = !option.checked;
                }

                if (option.name === "all") {
                    option.checked = false;
                }
            });
        }
        setFilterOptions(newFilterOptions);
    }

    return (
        <div className="row important-events-container">
            <p className="description">The DesTech 2016 schedule is currently under development. The agenda will be published for desktop and
                mobile using the sched.org conference app. Please keep an eye on this website for information about the
                DesTech 2016 program.</p>
            <div className="events-filter col-12 col-sm-3 col-lg-3">
                <label className="filter-title">
                    <input type="checkbox" checked={showFilter} onChange={() => {setShowFilter(!showFilter)}} />
                    <i className="fas fa-sliders-h mobile-filter-icon" />
                    <span>Filters</span>
                    <i className="fa fa-caret-down screen-filter-icon"/>
                </label>
                <ul className="list-group events-filter-list" style={{height: showFilter ? "168px" : "0", opacity: showFilter ? "1" : "0"}} >
                    {
                        filterOptions.map((option) =>
                            <li className="list-group-item" key={option.name}>
                                <label className="control control-checkbox">
                                    { option.checked ? <i className="fa fa-check-square" /> : <i className="far fa-square" />}
                                    {
                                        option.checked ?
                                            <span><b>{option.name}</b> <span className="event-count">({option.number})</span></span>
                                            : <span>{option.name} <span className="event-count">({option.number})</span></span>
                                    }
                                    <input type="checkbox" checked={option.checked} onChange={() => {checkboxHandler(option.name)}} />
                                </label>
                            </li>
                        )
                    }
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