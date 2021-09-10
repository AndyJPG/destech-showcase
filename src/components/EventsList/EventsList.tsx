import './EventsList.scss';
import * as React from 'react';
import ContentPlaceholder from "../ContentPlaceholder/ContentPlaceholder";
import type { Event } from "../../entities/Event";
import {Link} from "react-router-dom";

type Props = {
    events: Array<Event> | undefined,
    filterList: Array<string>
}

function EventsList(props: Props) : React.ReactElement {

    // If evens haven't been fetch yet
    if (props.events === undefined) {
        return (
            <div className="events-container col-12 col-sm-12 col-md-8 col-lg-9">
                <ContentPlaceholder eventPlaceholder={true}/>
                <ContentPlaceholder eventPlaceholder={true}/>
                <ContentPlaceholder eventPlaceholder={true}/>
            </div>
        );
    }

    let newEventsList = [...props.events];

    // If filter list has all
    if (!props.filterList.includes("all")) {
        // Filtered event list
        newEventsList = props.events.filter((event) => {
            for (let filterListIndex = 0; filterListIndex < props.filterList.length; filterListIndex++) {
                if (event.category.includes(props.filterList[filterListIndex])) {
                    return true;
                }
            }
            return false;
        });
    }

    // Events list
    const eventsList = newEventsList.map((event) =>
        <Link className="link-container" to="/program" key={event.eventId}>
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
        </Link>);

    return (
        <div className="events-container col-12 col-sm-12 col-md-8 col-lg-9">
            <ul className="list-group">
                {eventsList}
            </ul>
        </div>
    );
}

export default EventsList;