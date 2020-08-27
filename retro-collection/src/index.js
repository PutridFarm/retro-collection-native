import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Games from "./Games";
import Home from "./Home";
import About from "./About";
import {
  AppRegistry,
  View
} from 'react-native';
import Drawer from 'react-native-drawer';
import Header from './header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {consoleList: [], open: false};
    this.fetchConsoleList = this.fetchConsoleList.bind(this);
  }

  componentDidMount(){
    this.fetchConsoleList();
  }

  openSideMenu = (value) => {
    this.setState({open: value});
  }

  fetchConsoleList() {
    fetch('/consoles')
     .then(response => {
       return response.json()
     })
     .then(data => {
       this.setState({ consoleList: data.consoles});
     })
     .catch(error=>{
       console.log(error)
     })
  }

  render() {
    const drawerStyles = {
        drawer: { shadowColor: '#FFFFFF', shadowOpacity: 0.8, shadowRadius: 3},
        main: {paddingLeft: 3},
    }
    return (
      <React.Fragment>
        <BrowserRouter>
          <Drawer
              type="overlay"
              open={this.state.open}
              content={
                      <View style={{ flex: 1}}>
                        <ul className="nav" onClick={() => this.openSideMenu(false)}>
                          <li><NavLink exact to="/">Home</NavLink></li>
                          <li><NavLink to="/games">Games</NavLink></li>
                          <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                      </View>
                }
              openDrawerOffset={0.1}
              styles={drawerStyles}
              tweenHandler={Drawer.tweenPresets.parallax}
          >
            <div className="App" onClick={() => this.openSideMenu(false)}>
              <Header
                className="App-header"
                onIconPress={(e) => {this.openSideMenu(true);e.stopPropagation()}}
                title="Retro-Collection"
                />
              <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/games" render={() => <Games consoleList={this.state.consoleList}/>}/>
              </div>
            </div>
          </Drawer>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}


AppRegistry.registerComponent('App', () => App);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
