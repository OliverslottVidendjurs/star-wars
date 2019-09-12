import React from 'react';
import "../node_modules/materialize-css/dist/css/materialize.css"
import './App.css';
import Home from "./home";
import { BrowserRouter, Route } from "react-router-dom";
import Spaceship from './spaceship';
import NavBar from "./navBar"

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <NavBar/>
        <Route path="/" exact component={Home} />
        <Route path="/spaceship/:post_id" component={Spaceship} />
      </BrowserRouter>
    </div>
  );
}

export default App;
// https://swapi.co/api/starships/