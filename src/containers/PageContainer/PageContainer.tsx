import * as React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

type Props = {
    children: JSX.Element
}

function PageContainer(props: Props): React.ReactElement {
    return (
        <div className="page-container" style={{paddingTop: "7rem"}}>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default PageContainer;