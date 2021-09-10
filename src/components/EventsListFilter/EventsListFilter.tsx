import './EventsListFilter.scss';
import * as React from "react";
import ContentPlaceholder from "../ContentPlaceholder/ContentPlaceholder";
import type {FilterOption} from "../../entities/Event";

type Props = {
    showFilter: boolean,
    filterOptions: Array<FilterOption> | undefined,
    showFilterHandler(showFilter: boolean): void,
    filterCheckboxHandler(filterName: string): void
}

function EventsListFilter(props: Props): React.ReactElement {

    if (props.filterOptions === undefined) {
        return (
            <div className="events-filter col-12 col-sm-12 col-md-4 col-lg-3">
                <label className="filter-title">
                    <i className="fas fa-sliders-h mobile-filter-icon"/>
                    <span>Filters</span>
                    <i className="fa fa-caret-down screen-filter-icon"/>
                </label>
                <ContentPlaceholder filterPlaceholder={true}/>
            </div>
        );
    }

    // Calculate height or option list
    function getFilterListHeight(): string {
        if (props.filterOptions !== undefined) {
            const filterListHeight = props.filterOptions.length * 40;
            return filterListHeight.toString() + "px";
        }

        return "0px";
    }

    return (
        <div className="events-filter col-12 col-sm-12 col-md-4 col-lg-3">
            <label className="filter-title">
                <input type="checkbox" checked={props.showFilter} onChange={() => {
                    props.showFilterHandler(!props.showFilter)
                }}/>
                <i className="fas fa-sliders-h mobile-filter-icon"/>
                <span>Filters</span>
                <i className="fa fa-caret-down screen-filter-icon"/>
            </label>
            <ul className="list-group events-filter-list"
                style={{
                    height: props.showFilter ? getFilterListHeight() : "0",
                    opacity: props.showFilter ? "1" : "0"
                }}>
                {
                    props.filterOptions.map((option) =>
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
                                    props.filterCheckboxHandler(option.name)
                                }}/>
                            </label>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default EventsListFilter;