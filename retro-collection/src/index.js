import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import logo from './logo.svg';
import * as serviceWorker from './serviceWorker';
import {listView} from './ListView';
import fire from './fire'; //firebase reference
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Games from "./Games";
import Home from "./Home";
import About from "./About";
import GamesNav from "./Games";
class App extends Component {

  constructor(props)
  {
	  super(props);
	  this.state = { messages: [] }; // set up react state
  }
  componentWillMount()
  {
	  let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
	  messagesRef.on('child_added', snapshot =>
	  {
		let message = { text: snapshot.val(), id: snapshot.key };
		this.setState({ messages: [message].concat(this.state.messages) });
	  })
  }
  addMessage(e)
  {
	  e.preventDefault(); //prevent form submit from reloading the page
	  /* Send the message to Firebase */
	  fire.database().ref('messages').push (this.inputE1.value );
	  this.inputE1.value = ''; //clear the input
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
