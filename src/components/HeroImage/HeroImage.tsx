import './heroImage.scss';
import * as React from 'react';
import { Carousel } from "react-bootstrap";

function HeroImage() {

    return (
        <div className="hero-container container-fluid">
            <div className="hero-content-container container-lg">
                <div className="hero-header-container">
                    <div className="style-border">
                        <h1 className="hero-header">the international conference on design & technology</h1>
                        <p className="hero-subtitle">Inclusion, Innovation & Interdisciplinary Design</p>
                    </div>
                </div>
                <Carousel fade className="hero-carousel">
                    <Carousel.Item>
                        <img className="d-block w-100" src="assets/img/products/sport-watch.png" alt="sport watch" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="assets/img/products/drone-image.png" alt="drone" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="assets/img/products/pen-image.png" alt="pen" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src="assets/img/products/chair-image.png" alt="chair" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default HeroImage;