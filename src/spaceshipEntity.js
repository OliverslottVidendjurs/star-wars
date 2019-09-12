import React from "react";
import { Link } from "react-router-dom";

class SpaceshipEntity extends React.Component {
    render() {
        let startOfStarship = this.props.spaceship.url.substring(this.props.spaceship.url.indexOf("/starships/"));
        let afterStarship = startOfStarship.substring("/starships/".length);
        let id = afterStarship.substring(0, afterStarship.indexOf("/"));
        console.log(id);
        return (
            <li className="row shipContainer">
                <h5>{this.props.spaceship.name}</h5>
                <p><span>Model: </span>{this.props.spaceship.model}</p>
                <p><span>Passengers: </span>{this.props.spaceship.passengers}</p>
                <Link to={"/spaceship/"+id}>Mere info</Link>
            </li>
        )
    }
}

export default SpaceshipEntity;