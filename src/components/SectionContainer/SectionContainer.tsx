import './sectionContainer.scss';
import * as React from 'react';

type Props = {
    sectionTitle: string,
    children?: React.ReactNode
}

function SectionContainer(props: Props) {
    return (
        <div className="container-fluid section-container">
            <div className="container-lg content-container">
                <div className="section-title-container">
                    <img className="section-title-element align-middle" src="" alt="title element" />
                    <h3 className="section-title align-middle">{props.sectionTitle}</h3>
                </div>
            </div>
        </div>
    )
}

export default SectionContainer;