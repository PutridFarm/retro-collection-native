import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './css/games.css';

class GamesNav extends Component {
  render() {
    return (
      <ul className="gamesNav">
        <li><NavLink exact to="/games/nes">NES</NavLink></li>
        <li><NavLink to="/games/snes">SNES</NavLink></li>
        <li><NavLink to="/games/n64">N64</NavLink></li>
      </ul>
    );
  }
}

export default GamesNav;
