import './heroImage.scss';
import * as React from 'react';

function HeroImage() {

    return <div className="hero-container container-lg">
        <div className="row align-items-center">
            <div className="hero-header-container col-sm-12 col-lg-6">
                <div className="style-border">
                    <h1 className="hero-header">the international conference on design & technology</h1>
                    <p className="hero-subtitle">Inclusion, Innovation & Interdisciplinary Design</p>
                </div>
            </div>
            <div className="hero-image-container col-sm-12 col-lg-6">
                <img className="hero-image" src="/assets/img/hero-image.jpg" alt="hero image" />
            </div>
        </div>
    </div>
}

export default HeroImage;