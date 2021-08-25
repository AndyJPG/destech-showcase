import './newsLetterSection.scss';
import * as React from 'react';
import GeometryShape from "../GeometryShape/GeometryShape";

function NewsLetterSection() {
    return (
        <div className="row newsletter-container align-items-center justify-content-center">
            <div className="col-lg-auto">
                <GeometryShape img="assets/img/hero-image.jpg" thumbnailTitle="overview & design themes" url="www.google.com.au"/>
            </div>
            <div className="col-lg-auto">
                <GeometryShape img="assets/img/hero-image.jpg" thumbnailTitle="design & technology conference" />
                <GeometryShape img="assets/img/hero-image.jpg" thumbnailTitle="destination - geelong" />
            </div>
            <div className="col-lg-auto">
                <GeometryShape
                    title="Enter your email to subscribe to our Newsletter *"
                    fullWidth={true}
                    input={true} />
            </div>
        </div>
    )
}

export default NewsLetterSection;