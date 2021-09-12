import './navbarStyle.scss';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

type Menu = {
    name: string,
    href: string
}

function Navbar() {

    // Menu options
    const menu: Array<Menu> = [
        {"name": "home", "href": "/"},
        {"name": "authors", "href": "/authors"},
        {"name": "program", "href": "/program"},
        {"name": "registrations", "href": "/registrations"},
        {"name": "about", "href": "/about"},
        {"name": "contact us", "href": "/contact-us"}
    ];

    // Window position
    const [yPosition, setYPosition] = useState(0);

    // Function tracks user scroll position
    function trackScrollPosition() {
        setYPosition(window.scrollY);
        // Line below is test only, remove when necessary
        // console.log('current position: ' + yPosition);
    }

    // Use effect to add event listener and remove when component unmounted
    useEffect(() => {
        window.addEventListener('scroll', trackScrollPosition);

        return () => {
            window.removeEventListener('scroll', trackScrollPosition);
        };
    });

    return (
        <div
            className={"container-fluid nav-container" + (yPosition === 0 ? "" : " fixed-navbar")}
            style={{boxShadow: yPosition === 0 ? "" : "rgba(0, 0, 0, 0.1) 0 4px 12px"}}>
            <nav className="navbar navbar-expand-lg container-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className="destech-logo"
                             src={`${process.env.PUBLIC_URL}/assets/img/logo/destech-logo-${yPosition === 0 ? "black" : "white"}.svg`}
                             alt="Destech logo"/>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {menu.map(menu => <li className="nav-item" key={menu.href}>
                                <Link className="nav-link" to={menu.href}>{menu.name}</Link>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;