import './chairManSection.scss';
import * as React from 'react';

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
        <div className="background-container container-fluid">
            <div className="content-container container-lg">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="row">
                            <div className="col-6 col-sm-4 col-lg-12">
                                <img className="img-fluid" src="/assets/img/hero-image.jpg" alt="Chair man" />
                            </div>
                            <div id="chairman-info" className="col-6 col-sm-4 col-lg-12">
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
                            <div id="animate-element" className="align-middle">
                                <img src="" alt="animate element" />
                            </div>
                            <a id="read-message-btn" className="align-middle" href="#">read message</a>
                        </div>
                    </div>
                    <div className="float-element">
                        <img src="" alt="float cube" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChairManSection;