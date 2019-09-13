import React from "react"
import Axios from "axios";

class Spaceship extends React.Component {
    state = {
        starship: null
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        Axios.get("https://swapi.co/api/starships/" + id)
            .then(res => {
                this.setState({
                    starship: res.data
                });
            });
    }
    render() {
        let starship = this.state.starship;
        return (
            <div>
                {starship ? (
                    <div className="moreInfoContainer">
                        <p><span>Name: </span>{starship.name}</p>
                        <p><span>Model: </span>{starship.model}</p>
                        <p><span>Cost: </span>{starship.cost_in_credits} credits</p>
                        <p><span>Passengers: </span>{starship.passengers}</p>
                        
                    </div>
                ) : (
                        <p>Loading..</p>
                    )}
            </div>
        )
    }
}

export default Spaceship;