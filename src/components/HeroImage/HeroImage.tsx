import './heroImage.scss';
import * as React from 'react';
import { Carousel } from "react-bootstrap";
import {cleanup} from "@testing-library/react";

type Image = {
    src: string,
    alt: string
}

// Images array
const images: Array<Image> = [
    {src: "assets/img/products/sport-watch.png", alt: "sport watch"},
    {src: "assets/img/products/drone-image.png", alt: "drone"},
    {src: "assets/img/products/pen-image.png", alt: "pen"},
    {src: "assets/img/products/chair-image.png", alt: "chair"}
];

function HeroImage() {

    // Variable to monitor screen width
    const [scrennWidth, setScreenWidth] = React.useState(window.innerWidth);

    // Tracking screen size
    React.useEffect(() => {
        function screenWidthMonitor(width: number) {
            setScreenWidth(width);
        }

        window.addEventListener("resize",() => {screenWidthMonitor(window.innerWidth);});

        return function cleanup() {
            window.removeEventListener("resize", () => {screenWidthMonitor(window.innerWidth);});
        };
    });

    return (
        <div className="hero-container container-fluid">
            <div className="hero-content-container container-lg">
                <div className="hero-header-container">
                    <div className="style-border">
                        <h1 className="hero-header">the international conference on design & technology</h1>
                        <p className="hero-subtitle">Inclusion, Innovation & Interdisciplinary Design</p>
                    </div>
                </div>
                <Carousel fade className="hero-carousel" controls={scrennWidth < 992} indicators={scrennWidth > 992} variant="dark">
                    { images.map((image) =>
                        <Carousel.Item key={image.alt}>
                            <img className="d-block w-100" src={image.src} alt={image.alt} />
                        </Carousel.Item>
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default HeroImage;