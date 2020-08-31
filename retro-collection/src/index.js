import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Games from "./Games";
import Home from "./Home";
import About from "./About";
import {
  AppRegistry,
  View,
  StyleSheet,
  Text
} from 'react-native';
import { NativeRouter, Link, Route } from "react-router-native";
import Drawer from 'react-native-drawer';
import Header from './header';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {consoleList: [], openSideMenu: false};
    this.fetchConsoleList = this.fetchConsoleList.bind(this);
  }

  componentDidMount(){
    this.fetchConsoleList();
  }

  openSideMenu = (value) => {
    this.setState({openSideMenu: value});
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
    return (
        <NativeRouter>
          <Drawer
              type="overlay"
              open={this.state.openSideMenu}
              content={
                      <View style={styles.sideMenu}>
                        <Link exact to="/"><Text style={styles.sideMenuItem}>Home</Text></Link>
                        <Link to="/games"><Text style={styles.sideMenuItem}>Games</Text></Link>
                        <Link to="/about"><Text style={styles.sideMenuItem}>About</Text></Link>
                      </View>
                }
              openDrawerOffset={0.1}
              tweenHandler={Drawer.tweenPresets.parallax}
          >
            <View style={styles.app} onStartShouldSetResponder={() => this.openSideMenu(false)}>
              <Header
                onIconPress={(e) => {this.openSideMenu(true);e.stopPropagation()}}
                title="Retro-Collection"
                />
              <View style={styles.content}>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/games" render={() => <Games consoleList={this.state.consoleList}/>}/>
              </View>
            </View>
          </Drawer>
        </NativeRouter>
    );
  }
}

var styles = StyleSheet.create({
  app: {
      backgroundColor: '#212121',
      textAlign: 'center',
  },
  content: {
    width: 'auto',
  },
  sideMenu: {
    flex:1,
    flexDirection: 'column',
    padding: 0,
    width: 100,
    backgroundColor: '#2D333B',
  },
  sideMenuItem: {
    backgroundColor: '#2D333B',
    listStyleType: 'none',
    margin: 0,
    padding: 20,
    display: 'inline-block',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
});

AppRegistry.registerComponent('App', () => App);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
