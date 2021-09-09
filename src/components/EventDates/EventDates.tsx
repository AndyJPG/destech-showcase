import './eventDates.scss';
import * as React from 'react';
import {useState, useEffect} from 'react';
import type { Event, FilterOption } from "../../entities/Event";
import fetchEventsUseCase from "../../useCase/fetchEventsUseCase";
import EventsList from "../EventsList/EventsList";
import EventsListFilter from "../EventsListFilter/EventsListFilter";

function EventDates() {

    // Get events
    const [events, setEvents] = useState<Array<Event> | undefined>(undefined);

    // Filter options
    const [filterOptions, setFilterOptions] = useState<Array<FilterOption> | undefined>(undefined);

    // Error
    const [err, setErr] = useState(undefined);

    // Filter list
    const [filterList, setFilterList] = useState<Array<string>>(["all"]);

    // Show filter or not
    const [showFilter, setShowFilter] = useState(true);

    // Fetch data
    useEffect(() => {
        if (events === undefined && err === undefined) {

            // Simulate fetching
            setTimeout(() => {
                fetchEventsUseCase()
                    .then((res) => {
                        const [events, filterOptions] = res;
                        setEvents(events);
                        setFilterOptions(filterOptions);
                    })
                    .catch(err => setErr(err));
            }, 2000);

        }
    });

    // Show filter handler
    function showFilterHandler(showFilter: boolean) {
        setShowFilter(showFilter);
    }

    // Filter option checkbox handler
    function filterCheckboxHandler(name: string) {
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

    return (
        <div className="row important-events-container">
            <p className="description">The DesTech 2016 schedule is currently under development. The agenda will be
                published for desktop and
                mobile using the sched.org conference app. Please keep an eye on this website for information about the
                DesTech 2016 program.</p>
            <EventsListFilter
                showFilter={showFilter}
                filterOptions={filterOptions}
                showFilterHandler={showFilterHandler}
                filterCheckboxHandler={filterCheckboxHandler}/>
            { err ? "Error fetching events data" : <EventsList events={events} filterList={filterList}/> }
        </div>
    )
}

export default EventDates;