import React, { Component, useEffect , useState} from "react";
import {ListView} from './ListView';
import './css/games.css';
import {
  Route,
  NavLink
} from "react-router-dom";

function Games(){
    return (
      <Route path="/games" component= {GamesNav}/>
    );
}

class GamesNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamesList: [],
    };
  }

  render() {
    return (
      <React.Fragment>
        <ul className="gamesNav">
         <li><NavLink exact to="/games/nes">NES</NavLink></li>
         <li><NavLink to="/games/snes">SNES</NavLink></li>
         <li><NavLink to="/games/n64">N64</NavLink></li>
        </ul>
        <Route path="/games/nes" render={() => <Console consoleId="nes"/>}/>
        <Route path="/games/snes" render={() => <Console consoleId="snes"/>}/>
        <Route exact path="/games">
          <p>Select a console to see a list of games! </p>
        </Route>
     </React.Fragment>
    );
  }
}

function Console (props){
  const [gamesList, setGames] = useState([]);

  useEffect(() => {
    fetch("/games/" + (props.consoleId)).then(response =>
      response.json().then(data => {
        setGames(data.games);
      })
    )
    .catch(error=>{
      console.log(error)
    });
  }, []);

  console.log("ConsoleId = " + (props.consoleId));
  console.log(gamesList);

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
