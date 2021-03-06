import './geometryShape.scss';
import * as React from 'react';
import { Link } from "react-router-dom";

type Props = {
    title?: string,
    thumbnailTitle?: string,
    url?: string,
    img?: string,
    fullWidth?: boolean,
    input?: boolean
}

type ShapeContainerStyle = {
    backgroundColor: string,
    width?: string
}

function GeometryShape(props: Props) {

    let thumbnailTitleComponent = null;

    let shapeContainerStyle: ShapeContainerStyle = {
        backgroundColor: props.img ? "transparent" : "#f2752e"
    };

    if (props.fullWidth) {
        shapeContainerStyle.width = "100%";
    }

    if (props.thumbnailTitle) {
        if (props.url) {
            thumbnailTitleComponent =
                <div className="thumbnail-title">
                    { props.thumbnailTitle }
                </div>;
        } else {
            thumbnailTitleComponent =
                <div className="thumbnail-title">
                    { props.thumbnailTitle }
                </div>;
        }
    }

    if (props.img) {
        if (props.url) {
            return (
                <Link to={props.url}>
                    <div className="img-shape-container" style={ shapeContainerStyle }>
                        {
                            props.img ?
                                <div className="img-container">
                                    <img src={props.img} alt="adf"/>
                                </div> : null
                        }

                        { thumbnailTitleComponent }
                    </div>
                </Link>
            )
        }

        return (
            <div className="img-shape-container" style={ shapeContainerStyle }>
                {
                    props.img ?
                        <div className="img-container"
                             style={{ background: `url("${ props.img }")`,
                                 backgroundSize: "auto 100%",
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "center"}}>
                        </div> : null
                }

                { thumbnailTitleComponent }
            </div>
        )
    }

    return (
        <div className="shape-container" style={ shapeContainerStyle }>
            { props.img ? null : <span className="shape-before" /> }

            {
                props.title ?
                    <h4 className="shape-title">{props.title}</h4> : null
            }

            {
                props.input ?
                    <div className="shape-container-form">
                        <div className="shape-container-input">
                            <input />
                        </div>
                        <div className="shape-container-button">
                            <button className="btn btn-lg">submit</button>
                        </div>
                    </div> : null
            }

            { props.img ? null : <span className="shape-after" /> }
        </div>
    )
}

export default GeometryShape;