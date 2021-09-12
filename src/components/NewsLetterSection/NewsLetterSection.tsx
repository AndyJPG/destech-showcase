import './newsLetterSection.scss';
import * as React from 'react';
import GeometryShape from "../GeometryShape/GeometryShape";

function NewsLetterSection() {
    return (
        <div className="row newsletter-container align-items-center justify-content-center">
            <div className="col-6 col-sm-6 col-md-2 col-lg-3 col-xl-3">
                <GeometryShape img="assets/img/geoImg/geo-3.jpg" thumbnailTitle="overview & design themes" url="/overview & design themes"/>
            </div>
            <div className="col-6 col-sm-6 col-md-2 col-lg-3 col-xl-3">
                <GeometryShape img="assets/img/geoImg/geo-1.jpg" thumbnailTitle="design & technology conference" url="/design & technology conference"/>
                <GeometryShape img="assets/img/geoImg/geo-2.jpg" thumbnailTitle="destination - geelong" url="/destination - geelong"/>
            </div>
            <div className="col-8 col-sm-10 col-md-5 col-lg-5 col-xl-5">
                <GeometryShape
                    title="Enter your email to subscribe to our Newsletter *"
                    fullWidth={true}
                    input={true} />
            </div>
        </div>
    )
}

export default NewsLetterSection;