import './newsLetterSection.scss';
import * as React from 'react';
import GeometryShape from "../GeometryShape/GeometryShape";

function NewsLetterSection() {
    return (
        <div className="row newsletter-container">
            <div className="col-lg-3">
                <div className="img-container"
                     style={{ background: "url('assets/img/hero-image.jpg')",
                         backgroundSize: "auto 100%",
                         backgroundRepeat: "no-repeat",
                         backgroundPosition: "center"}}>
                </div>
                <div className="shape-container-title">
                    overview & design themes
                {/*    TODO: configure shapes*/}
                </div>
            </div>
            <div className="col-lg-3 two-shape-container">
                <GeometryShape
                    img="assets/img/hero-image.jpg"
                    thumbnailTitle="Overview" />

                <div className="shape-container">
                    <span className="shape-before" />
                    img2
                    <span className="shape-after" />
                </div>
            </div>
            <div className="col-lg-6 newsletter-shape">
                <GeometryShape
                    title="Enter your email to subscribe to our Newsletter *"
                    fullWidth={true} />
            </div>
        </div>
    )
}

export default NewsLetterSection;