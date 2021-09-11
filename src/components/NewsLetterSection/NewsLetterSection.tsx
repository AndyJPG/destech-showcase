import './newsLetterSection.scss';
import * as React from 'react';
import GeometryShape from "../GeometryShape/GeometryShape";

function NewsLetterSection() {
    return (
        <div className="row newsletter-container align-items-center justify-content-center">
            <div className="col-6">
                <GeometryShape img="assets/img/geoImg/geo-3.jpg" thumbnailTitle="overview & design themes" url="www.google.com.au"/>
            </div>
            <div className="col-6">
                <GeometryShape img="assets/img/geoImg/geo-1.jpg" thumbnailTitle="design & technology conference" />
                <GeometryShape img="assets/img/geoImg/geo-2.jpg" thumbnailTitle="destination - geelong" />
            </div>
            <div className="col-8">
                <GeometryShape
                    title="Enter your email to subscribe to our Newsletter *"
                    fullWidth={true}
                    input={true} />
            </div>
        </div>
    )
}

export default NewsLetterSection;