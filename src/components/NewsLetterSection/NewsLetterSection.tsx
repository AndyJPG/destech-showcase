import './newsLetterSection.scss';
import * as React from 'react';
import GeometryShape from "../GeometryShape/GeometryShape";

function NewsLetterSection() {
    return (
        <div className="newsletter-container">
            <div className="shape-container">
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
            <div className="two-shape-container">
                <GeometryShape
                    img="assets/img/hero-image.jpg"
                    thumbnailTitle="Overview" />

                <div className="shape-container">
                    <span className="shape-before" />
                    img2
                    <span className="shape-after" />
                </div>
            </div>
            <div className="shape-container newsletter-shape">
                <span className="shape-before" />
                newsletter
                <span className="shape-after" />
            </div>
        </div>
    )
}

export default NewsLetterSection;