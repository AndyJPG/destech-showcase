import './eventDates.scss';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

type JsonData = {
    filterOptions: Array<{
        name: string,
        number: number,
        checked: boolean
    }>,
    events: Array<{
        eventName: string,
        eventDate: string,
        eventLocation: string,
        category: Array<string>
    }>
}

type Event = {
    eventName: string,
    eventDate: Date,
    eventLocation: string,
    category: Array<string>
}

type FilterOption = {
    name: string,
    number: number,
    checked: boolean
}

function EventDates() {

    // Get events
    const [events, setEvents] = useState<Array<Event> | undefined>(undefined);
    // Filter options
    const [filterOptions, setFilterOptions] = useState<Array<FilterOption> | undefined>(undefined);
    // Error
    const [err, setErr] = useState(undefined);

    // Fetch data
    useEffect(() => {
        if (events === undefined) {
            fetch("eventsData.json")
                .then(res => res.json())
                .then((json: JsonData) => {
                    setTimeout(() => {
                        const eventsData: Array<Event> = json.events.map((event) => {
                            return {
                                eventName: event.eventName,
                                eventDate: new Date(event.eventDate),
                                eventLocation: event.eventLocation,
                                category: event.category
                            }
                        });

                        const filterOptionData: Array<FilterOption> = json.filterOptions;

                        setFilterOptions(filterOptionData);
                        setEvents(eventsData);
                    }, 1000);

                })
                .catch(err => setErr(err));
        }
    });

    // Filter list
    const [filterList, setFilterList] = useState<Array<string>>(["all"]);

    // Show filter or not
    const [showFilter, setShowFilter] = useState(true);

    // Filter option checkbox handler
    function checkboxHandler(name: string) {
        if (filterOptions === undefined) {
            return;
        }

        // New filter list
        let newFilterList: Array<string> = [];

        // Filter options
        let newFilterOptions = [...filterOptions];

        //All category index
        let indexOfAllCategory: number = 0;

        // If all is selected
        if (name === "all") {
            // Set filter list to all
            newFilterList = ["all"];

            // Update filter options
            newFilterOptions.forEach((option) => {
                if (option.name === name) {
                    option.checked = true;
                } else {
                    option.checked = false;
                }
            });
        } else {
            // Update filter options and filter list
            newFilterOptions.forEach((option, index) => {
                if (option.name === name) {
                    option.checked = !option.checked;
                }

                if (option.name === "all") {
                    indexOfAllCategory = index;
                    option.checked = false;
                }

                if (option.checked === true) {
                    newFilterList.push(option.name);
                }
            });
        }

        // If filter list length is 0 select all
        if (newFilterList.length <= 0) {
            newFilterOptions[indexOfAllCategory].checked = true;
            newFilterList = ["all"];
        }

        // Set filter list
        setFilterList(newFilterList);
        // Set new filter options
        setFilterOptions(newFilterOptions);
    }

    // Calculate height or option list
    function getFilterListHeight(): string {
        if (filterOptions !== undefined) {
            const filterListHeight = filterOptions.length * 40;
            return filterListHeight.toString() + "px";
        }

        return "0px";
    }

    // Get events list
    function getEventsList(): Array<Event> {
        // If evens haven't been fetch yet
        if (events === undefined) {
            return [];
        }

        // If filter list has all
        if (filterList.includes("all")) {
            return events;
        }

        // Filtered event list
        const newEventsList = events.filter((event) => {
            for (let filterListIndex = 0; filterListIndex < filterList.length; filterListIndex++) {
                if (event.category.includes(filterList[filterListIndex])) {
                    return true;
                }
            }
            return false;
        });

        return newEventsList;
    }

    return (
        <div className="row important-events-container">
            <p className="description">The DesTech 2016 schedule is currently under development. The agenda will be
                published for desktop and
                mobile using the sched.org conference app. Please keep an eye on this website for information about the
                DesTech 2016 program.</p>
            <div className="events-filter col-12 col-sm-12 col-md-4 col-lg-3">
                <label className="filter-title">
                    <input type="checkbox" checked={showFilter} onChange={() => {
                        setShowFilter(!showFilter)
                    }}/>
                    <i className="fas fa-sliders-h mobile-filter-icon"/>
                    <span>Filters</span>
                    <i className="fa fa-caret-down screen-filter-icon"/>
                </label>
                {err ? "Fetching error" : null}
                {filterOptions === undefined ? null :
                    <ul className="list-group events-filter-list"
                        style={{height: showFilter ? getFilterListHeight() : "0", opacity: showFilter ? "1" : "0"}}>
                        {
                            filterOptions.map((option) =>
                                <li className="list-group-item" key={option.name}>
                                    <label className="control control-checkbox">
                                        {option.checked ? <i className="fa fa-check-square"/> :
                                            <i className="far fa-square"/>}
                                        {
                                            option.checked ?
                                                <span><b>{option.name}</b> <span
                                                    className="event-count">({option.number})</span></span>
                                                : <span>{option.name} <span
                                                    className="event-count">({option.number})</span></span>
                                        }
                                        <input type="checkbox" checked={option.checked} onChange={() => {
                                            checkboxHandler(option.name)
                                        }}/>
                                    </label>
                                </li>
                            )
                        }
                    </ul>
                }
            </div>
            <div className="events-container col-12 col-sm-12 col-md-8 col-lg-9">
                <ul className="list-group">
                    {
                        events === undefined ? "Loading..." :
                            getEventsList().map((event) =>
                                <Link className="link-container" to="/program" key={event.eventName}>
                                    <li className="event-item list-group-item">
                                        <div className="event-content">
                                            <p className="event-categories">
                                                {event.category.map((category, index) => index === 0 ? category : ", " + category)}
                                            </p>
                                            <p className="event-name">{event.eventName}</p>
                                            <p><span
                                                className="event-date">{event.eventDate.toDateString()}</span> @<span
                                                className="event-location">{event.eventLocation}</span></p>
                                        </div>
                                        <i className="fas fa-caret-right"/>
                                    </li>
                                </Link>
                            )
                    }
                </ul>
            </div>
        </div>
    )
}

export default EventDates;