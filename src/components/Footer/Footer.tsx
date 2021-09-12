import "./footer.scss"
import * as React from 'react';

function Footer() {
    return (
        <div className="container-fluid footer">
            <p>Schools of engineering & communication and creative arts deakin university, geelong, VIC +61 3 5247 9360 destech@deakin.edu.au</p>
            <div className="container-lg logo-container">
                <a href="https://destech.jiangpeigeng.com/">
                    <img src="assets/img/logo/destech-logo-round.svg" alt="destech logo" />
                </a>
                <a href="https://www.deakin.edu.au/">
                    <img src="assets/img/logo/deakin-logo-round.svg" alt="destech logo" />
                </a>
            </div>
            <p>&copy; Deakin University CRICOS Provider Code : 00113B</p>
        </div>
    )
}

export default Footer;