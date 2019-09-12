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
                console.log(res);
                this.setState({
                    starship: res.data
                });
            });
    }
    render() {
        return (
            <div>
                {this.state.starship ? (
                    <p>{this.state.starship.name}</p>
                ) : (
                        <p>Loading..</p>
                    )}
            </div>
        )
    }
}

export default Spaceship;