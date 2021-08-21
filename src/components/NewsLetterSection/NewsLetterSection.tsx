import './newsLetterSection.scss';
import * as React from 'react';

function NewsLetterSection() {
    return (
        <div className="row newsletter-container">
            <div className="col-lg-3 shape-container">
                <span className="shape-before" />
                img1
                <span className="shape-after" />
            </div>
            <div className="col-lg-3">
                <div className="shape-container">
                    <span className="shape-before" />
                    img2
                    <span className="shape-after" />
                </div>
                <div className="shape-container">
                    <span className="shape-before" />
                    img3
                    <span className="shape-after" />
                </div>
            </div>
            <div className="col-lg-6 shape-container">
                <span className="shape-before" />
                newsletter
                <span className="shape-after" />
            </div>
        </div>
    )
}

export default NewsLetterSection;