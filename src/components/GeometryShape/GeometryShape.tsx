import './geometryShape.scss';
import * as React from 'react';

type Props = {
    title?: string,
    thumbnailTitle?: string,
    img?: string,
    fullWidth?: boolean,
    input?: boolean
}

type ShapeContainerStyle = {
    backgroundColor: string,
    width?: string
}

function GeometryShape(props: Props) {

    let shapeContainerStyle: ShapeContainerStyle = {
        backgroundColor: props.img ? "transparent" : "#f2752e"
    };

    if (props.fullWidth) {
        shapeContainerStyle.width = "100%";
    }

    return (
        <div className="shape-container" style={ shapeContainerStyle }>
            { props.img ? null : <span className="shape-before" /> }

            {
                props.img ?
                    <div className="img-container"
                                 style={{ background: `url("${ props.img }")`,
                                     backgroundSize: "auto 100%",
                                     backgroundRepeat: "no-repeat",
                                     backgroundPosition: "center"}}>
                    </div> : null
            }

            {
                props.thumbnailTitle ?
                    <div className="thumbnail-title">
                        { props.thumbnailTitle }
                    </div> : null
            }

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