import "./footer.scss"
import * as React from 'react';

function Footer() {
    const logoUrl = process.env.PUBLIC_URL + "/assets/img/logo/";

    return (
        <div className="container-fluid footer">
            <p>Schools of engineering & communication and creative arts deakin university, geelong, VIC +61 3 5247 9360 destech@deakin.edu.au</p>
            <div className="container-lg logo-container">
                <a href="https://destech.jiangpeigeng.com/">
                    <img src={logoUrl + "destech-logo-round.svg"} alt="destech logo" />
                </a>
                <a href="https://www.deakin.edu.au/">
                    <img src={logoUrl + "deakin-logo-round.svg"} alt="destech logo" />
                </a>
            </div>
            <p>&copy; Deakin University CRICOS Provider Code : 00113B</p>
        </div>
    )
}

export default Footer;