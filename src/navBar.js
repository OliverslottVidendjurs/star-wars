import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-wrapper">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;