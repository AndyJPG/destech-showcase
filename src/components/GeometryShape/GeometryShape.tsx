import './geometryShape.scss';
import * as React from 'react';

type Props = {
    title?: string,
    thumbnailTitle?: string,
    img?: string,
}

function GeometryShape(props: Props) {

    return (
        <div className="shape-container" style={{ backgroundColor: props.img ? "transparent" : "#f2752e"}}>
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

            { props.img ? null : <span className="shape-after" /> }
        </div>
    )
}

export default GeometryShape;