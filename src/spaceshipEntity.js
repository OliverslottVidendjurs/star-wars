import React from "react";
import { Link } from "react-router-dom";

class SpaceshipEntity extends React.Component {
    render() {
        return (
            <li className="row shipContainer">
                <h5>{this.props.spaceship.name}</h5>
                <p><span>Model: </span>{this.props.spaceship.model}</p>
                <p><span>Passengers: </span>{this.props.spaceship.passengers}</p>
                <Link to={"/spaceship/"+this.props.id}>Mere info</Link>
            </li>
        )
    }
}

export default SpaceshipEntity;