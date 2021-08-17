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
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Destech</a>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    { menu.map(menu => <li className="nav-item">
                        <a className="nav-link" href={menu.href}>{menu.name}</a>
                    </li>)}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;