import './chairManSection.scss';
import * as React from 'react';
import { Link } from "react-router-dom";

type Info = {
    chairManName: string,
    chairManTitle: string,
    sectionTitle: string,
    sectionContent: string
}

function ChairManSection() {

    const sectionInfo: Info = {
        chairManName: "PROF. IAN GIBSON",
        chairManTitle: "interim head of school, school of engineering, deakin university.",
        sectionTitle: "message from conference chair",
        sectionContent: "Welcome! Thank you for connecting with us. My name is Ian Gibson, and I'm excited to take this opportunity to share the concept behind DesTech, the conference themes, and to invite you to join us in 2016."
    };

    return (
        <div className="chairman-container container-fluid">
            <div className="content-container container-lg">
                <div className="row">
                    <div className="chairman-section col-12 col-lg-4">
                        <div className="row">
                            <div className="col-12 col-sm-4 col-lg-12">
                                <img className="img-fluid" src="/assets/img/chairman.jpg" alt="Chairman" />
                            </div>
                            <div id="chairman-info" className="col-12 col-sm-5 col-lg-12">
                                <p id="chairman-name">{sectionInfo.chairManName}</p>
                                <hr id="info-separator" />
                                <p id="chairman-title">{sectionInfo.chairManTitle}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 section-info">
                        <h2 className="section-title">{sectionInfo.sectionTitle}</h2>
                        <p className="section-content">{sectionInfo.sectionContent}</p>
                        <div className="animate-btn">
                            <div className="animate-btn-container">
                                <Link id="read-message-btn" className="align-middle" to="/">read message</Link>
                                <img id="animate-element" src="assets/img/floatElements/button-element-orange.svg" alt="button element"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="float-element">
                    <img src="assets/img/floatElements/float-element-black.svg" alt="float cube" />
                </div>
            </div>
        </div>
    )
}

export default ChairManSection;