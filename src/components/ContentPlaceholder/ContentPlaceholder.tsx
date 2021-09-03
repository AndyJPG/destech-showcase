import './contentPlaceholder.scss';
import * as React from 'react';

type Props = {
    eventPlaceholder?: boolean,
    filterPlaceholder?: boolean,
    numberOfPlaceholder?: number
};

function ContentPlaceholder(props: Props) {

    if (props.filterPlaceholder) {
        const filterPlaceholder =
            <div className="timeline-wrapper filter-placeholder">
                <div className="timeline-item">
                    <div className="animated-background">
                        <div className="background-maker">
                            <div className="content content-8"/>
                            <div className="content-separator"/>
                            <div className="content content-6"/>
                            <div className="content-separator"/>
                            <div className="content content-4"/>
                            <div className="content-separator"/>
                            <div className="content content-6"/>
                        </div>
                    </div>
                </div>
            </div>;

        return filterPlaceholder;
    }

    if (props.eventPlaceholder) {
        const eventPlaceholder =
            <div className="timeline-wrapper">
                <div className="timeline-item">
                    <div className="animated-background">
                        <div className="background-maker">
                            <div className="content-top"/>
                            <div className="content-separator"/>
                            <div className="content-mid"/>
                            <div className="content-separator"/>
                            <div className="content-bottom"/>
                            <div className="content-separator"/>
                        </div>
                    </div>
                </div>
            </div>;

        // Get number of placeholder
        // if (props.numberOfPlaceholder) {
        //     let placeholderArray: Array<React.ReactNode> = [];
        //
        //     for (let index = 0; index < props.numberOfPlaceholder; index++) {
        //         placeholderArray.push(eventPlaceholder);
        //     }
        //
        //     return (
        //         <div>
        //             {placeholderArray.map((placeholder) => placeholder)}
        //         </div>
        //     );
        // }

        return eventPlaceholder;
    }

    return (
        <div className="timeline-wrapper">
            <div className="timeline-item">
                <div className="animated-background">
                    <div className="background-maker">
                        <div className="content-top"/>
                        <div className="content-separator"/>
                        <div className="content-mid"/>
                        <div className="content-separator"/>
                        <div className="content-bottom"/>
                        <div className="content-separator"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentPlaceholder;