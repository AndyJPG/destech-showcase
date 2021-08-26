import './navbarStyle.scss';
import * as React from 'react';

type Menu = {
    name: string,
    href: string
}

function Navbar() {

    const menu: Array<Menu> = [
        { "name" : "home", "href" : "#" },
        { "name" : "authors", "href" : "#" },
        { "name" : "program", "href" : "#" },
        { "name" : "registrations", "href" : "#" },
        { "name" : "about", "href" : "#" },
        { "name" : "contact us", "href" : "#" }
    ];

    return (
        <div className="container-fluid nav-container">
            <nav className="navbar navbar-expand-lg container-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="destech-logo" src="/assets/img/logo/destech-logo-black.svg" alt="Destech logo"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            { menu.map(menu => <li className="nav-item">
                                <a className="nav-link" href={menu.href}>{menu.name}</a>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;