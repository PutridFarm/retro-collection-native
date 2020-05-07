import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import logo from './logo.svg';
import * as serviceWorker from './serviceWorker';
import {gridListView} from './GridListView';
import fire from './fire'; //firebase reference

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
		     {gridListView()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
