import React, { Component, useEffect , useState} from "react";
import {ListView} from './ListView';
import './css/games.css';
import {
  Route,
  NavLink,
  useParams
} from "react-router-dom";

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gamesList: [],
    };
  }

  render() {
    return (
      <Route path="/games" render={(props) => <GamesNav consoleId="/:consoleId"/>}/>
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
      <Route path="/:id/:consoleId" component={Console}/>
      <Route exact path="/games">
        <p>Select a console to see a list of games! </p>
      </Route>
   </React.Fragment>
  );
 }

function Console ()
{
  let { consoleId } = useParams();
  const [gamesList, setGames] = useState([]);

  useEffect(() => {
    fetch("/games").then(response =>
      response.json().then(data => {
        setGames(data.games);
      })
    );
  }, []);

  console.log("ConsoleId =" + consoleId);
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
