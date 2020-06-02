import React, { Component, useEffect } from "react";
import ListView from './ListView';
import './css/games.css';
import {
  Route,
  NavLink,
  HashRouter,
} from "react-router-dom";

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  render() {
    return (
      <Route path="/games" render={(props) => <GamesNav consoleId="/:id"/>}/>
    );
  }
}

function GamesNav (props){
  return (
    <React.Fragment>
      <ul className="gamesNav">
       <li><NavLink exact to="/games/nes">NES</NavLink></li>
       <li><NavLink to="/games/snes">SNES</NavLink></li>
       <li><NavLink to="/games/n64">N64</NavLink></li>
      </ul>
      <Route path="/:id/:id" component={Console}/>
      <Route exact path="/games">
        <p>Select a console to see a list of games! </p>
      </Route>
   </React.Fragment>
  );
 }

function Console ()
{
  useEffect(() => {

  }, []);

  const gamesList = [
    {
      id: 1,
      title: 'The Legend of Zelda',
      //parent: false						// parent is false if list item is top-level
    },
    {
      id: 2,
      title: 'Secret of Mana',
      //parent: 'The Legend of Zelda'
    },
    {
      id: 3,
      title: 'Super Metroid',
      //parent: 'Secret of Mana'
    },
    {
      id: 4,
      title: 'Super Mario World',
      //parent: 'Secret of Mana'
    }
  ];

  return (
    <React.Fragment>
      <div className="menu">
        <ListView
          header="Collection"
          items= {gamesList}
        />
      </div>
      <div className="games-content">
        <p>
          Here's information on all the console games!
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

export default Games;
