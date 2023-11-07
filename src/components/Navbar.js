import React from "react";
import reactlogo from "../images/react-icon-small.png"


function Navbar() {
    return (
        <nav>
            <img src={reactlogo} alt="react-logo" className="nav--icon"/>
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project1</h4>
        </nav>
    )
}

export default Navbar;