import React, { Component } from "react";
import {listView} from './ListView';
import './css/games.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Games extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="menu">
        {listView()}
      </div>
      <div className="games-content">
        <p>
          Select a console to see a list of games!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
      </React.Fragment>
    );
  }
}

export default Games;
