import './card.scss';
import * as React from 'react';

type Props = {
    img: string,
    title: string
}

function Card(props: Props) {
    return (
        <div className="card col-sm-6 col-lg-4">
            <img className="card-img-top" src={props.img} alt="card image"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    )
}

export default Card;