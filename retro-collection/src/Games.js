import React from "react";
import './css/games.css';
import {
  Route,
  NavLink
} from "react-router-dom";
import Content from './components/Content';

function Games(){
    return (
      <React.Fragment>
        <ul className="gamesNav">
         <li><NavLink exact to="/games/nes">NES</NavLink></li>
         <li><NavLink to="/games/snes">SNES</NavLink></li>
         <li><NavLink to="/games/n64">N64</NavLink></li>
        </ul>
        <Route path="/games/nes" render={() => <Content consoleId="nes"/>}/>
        <Route path="/games/snes" render={() => <Content consoleId="snes"/>}/>
        <Route exact path="/games">
          <p>Select a console to see a list of games! </p>
        </Route>
     </React.Fragment>
    );
}

export default Games;
