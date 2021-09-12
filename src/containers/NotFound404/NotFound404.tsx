import './NotFound404.scss';
import * as React from "react";
import { useLocation } from 'react-router-dom';

function NotFound404() : React.ReactElement {
    return (
        <div className="container-lg" style={{padding: "4rem 1rem"}}>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-4 col-md-5 col-lg-5 not-found-text-container" style={{alignSelf: "center"}}>
                    <div>
                        <h1>404: Page Not Found</h1>
                        <h5>Sorry, we can't find the page you are looking for.</h5>
                        <code>{useLocation().pathname}</code>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-7 col-lg-7">
                    <img className="not-found-img" src={`${process.env.PUBLIC_URL}/assets/img/notfound-404.svg`} alt="404 Not Found" />
                </div>
            </div>
        </div>
    )
}

export default NotFound404;