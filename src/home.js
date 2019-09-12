import React from "react";
import Axios from "axios";
import SpaceshipEntity from "./spaceshipEntity";

class Home extends React.Component {
    state = {
        spaceShips: []
    }
    componentDidMount() {
        Axios.get("https://swapi.co/api/starships/")
            .then(res => {
                console.log(res);
                this.setState({
                    spaceShips: res.data.results.splice(0, 5)
                });
            })
    }
    render() {

        let spaceShipList = this.state.spaceShips.length ? (
            this.state.spaceShips.map((spaceship) =>
                <SpaceshipEntity spaceship={spaceship}/>
            )
        ) : (
                <p>Loading..</p>
            )

        return (
            <ul>
                {spaceShipList}
            </ul>
        )
    }
}

export default Home;