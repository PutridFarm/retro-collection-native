import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import logo from './logo.svg';
import * as serviceWorker from './serviceWorker';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Games from "./Games";
import Home from "./Home";
import About from "./About";

class App extends Component {

  constructor(props)
  {
	  super(props);
	  this.state = { messages: [] }; // set up react state
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1>Retro-Collection</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <ul className="nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/games">Games</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
          {/*<Route path="/games" render={(props) => <GamesNav consoleId="/:id"/>}/>*/}
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/games" component={Games}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
