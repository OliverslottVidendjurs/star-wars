import React from "react";
import Axios from "axios";
import SpaceshipEntity from "./spaceshipEntity";
import { Link } from "react-router-dom";

class Home extends React.Component {
    state = {
        spaceShips: [],
        page: isNaN(this.props.match.params.page) ? 1 : Number(this.props.match.params.page),
        firstPage: false,
        lastPage: false
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            spaceShips: [],
            page: Number(nextProps.match.params.page),
            firstPage: false,
            lastPage: false
        });
        this.updateList(nextProps.match.params.page);

    }

    updateList = (page) => {
        let amountPerPage = 5; //Doesn't work with > 10 atm
        let begin = ((page - 1) * amountPerPage);
        let end = amountPerPage + ((page - 1) * amountPerPage);
        var apiPage = Math.floor(begin / 10 + 1);
        begin = (begin - 10 * (apiPage - 1));
        end = (end - 10 * (apiPage - 1));
        
        Axios.get("https://swapi.co/api/starships/?page=" + apiPage)
            .then(res => {
                let newSpaceshipsList;
                newSpaceshipsList = res.data.results.slice(begin, end);

                //The current page is missing some entries so we add them from the next api page
                if (newSpaceshipsList.length < amountPerPage) {
                    //Checks if we are not on the last page, because there is no need for a second call when there are no more pages..
                    if (page * amountPerPage <= res.data.count) {
                        console.log("a second call was nessesary");
                        Axios.get("https://swapi.co/api/starships/?page=" + (apiPage + 1))
                            .then(res2 => {
                                let concatty = newSpaceshipsList.concat(res2.data.results.slice(0, amountPerPage - newSpaceshipsList.length));
                                this.setState({
                                    spaceShips: concatty
                                });
                                return;
                            });
                    } else {
                        this.setState({
                            lastPage: true
                        });
                    }
                }
                this.setState({
                    spaceShips: newSpaceshipsList,                    
                    firstPage: this.state.page === 1,
                });
            });
    }

    componentDidMount() {
        this.updateList(this.state.page);
    }
    render() {

        let spaceShipList = this.state.spaceShips.length ? (
            this.state.spaceShips.map((spaceship) => {
                let startOfStarship = spaceship.url.substring(spaceship.url.indexOf("/starships/"));
                let afterStarship = startOfStarship.substring("/starships/".length);
                let id = afterStarship.substring(0, afterStarship.indexOf("/"));

                return (<SpaceshipEntity key={id} id={id} spaceship={spaceship} />);
            })
        ) : (
                <p>Loading..</p>
            )

        return (
            <ul>
                {spaceShipList}

                <Link to={"/" + (this.state.page - 1)} className={"btn left " + (this.state.firstPage ? "disabled" : "")}>&#60;</Link>
                <Link to={"/" + (this.state.page + 1)} className={"btn right " + (this.state.lastPage ? "disabled" : "")}>&#62;</Link>
            </ul>
        )
    }
}

export default Home;