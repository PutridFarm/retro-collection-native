import React, { Component } from "react";
import './css/games.css';
import Content from './components/Content';
import ListView from './components/ListView';
import {GameForm} from './components/GameForm';
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import {Button} from "semantic-ui-react";
import GameList from "./game-list"

class Games extends Component {

  constructor(props) {
    super(props);
    this.state= {
      consoleId:"snes",
      selectedItem: {},
      gameList:[],
      loading:true
    };
    this.handleMenuSelection = this.handleMenuSelection.bind(this);
    this.handleConsoleSelection = this.handleConsoleSelection.bind(this);
  }

  handleMenuSelection (item) {
    this.setState({selectedItem: item}); //// TODO: Might not need selectedItem.
    console.log("Games updateContent event was fired!");
  }

  componentDidMount () {
    this.handleConsoleSelection(this.state.consoleId);
  }

  handleConsoleSelection (consoleId) {
      console.log("handConsoleSelection item.id:" + consoleId.toLowerCase());
      fetch("/games/" + consoleId.toLowerCase()).then(response =>
        response.json().then(data => {
          this.setState({gameList: data.games, consoleId: consoleId.toLowerCase(), loading: false});
        })
      )
      .catch(error=>{
        console.log(error)
      });
  }

  render() {
    const backgroundColor = "#FFFFFF";
    return (
      <React.Fragment>
        <div className="menu">
          <ConsoleListDropdown consoleList={this.props.consoleList} onClickEvent={this.handleConsoleSelection}/>
          <GameForm consoleContext={this.state.consoleId} consoleList={this.props.consoleList}/>
          <Button>
            Add
          </Button>
          <ScrollView
            noSpacer={true}
            noScroll={true}
            style={styles.container}
          >
          {this.state.loading ? (
           <ActivityIndicator
                style={[styles.centering, styles.background]}
                color="#ff8179"
                size="large"
              />
          ) : (
            <GameList games={this.state.gameList} onPress={this.handleMenuSelection} style={backgroundColor}/>
          )}
          </ScrollView>
          {/*<ListView
              header="Collection"
              items= {this.state.gameList}
              button=<GameForm consoleContext={this.state.consoleId} consoleList={this.props.consoleList}/>
              onClickEvent={this.handleMenuSelection}
          />*/}
        </div>
        <Content item={this.state.selectedItem} />
     </React.Fragment>
    );
  }
}

function ConsoleListDropdown (props) {
  const consoleList = props.consoleList;
  return (
  <div className="console-list-dropdown">
    <button className="dropbtn">Select Console</button>
    <div className="console-list-dropdown-content">
      {
        consoleList.map(item => {
          return (
            <div key={item.id} onClick={() => props.onClickEvent(item.id)}>
              {item.id}
            </div>
          )
        })
      }
    </div>
  </div>
  );
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D333B"
  },
  centering: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    height: '100vh'
  },
});

export default Games;
