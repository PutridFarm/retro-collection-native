import React, { Component, useEffect , useState} from "react";
import './css/games.css';
import Content from './components/Content';
import ListView from './components/ListView';
import {GameForm} from './components/GameForm';

class Games extends Component {

  constructor(props) {
    super(props);
    this.state={consoleId:"snes", selectedItem: {}, gameList:[]}
    this.handleMenuSelection = this.handleMenuSelection.bind(this);
    this.handleConsoleSelection = this.handleConsoleSelection.bind(this);
  }

  handleMenuSelection (item) {
    this.setState({selectedItem: item}); //// TODO: Might not need selectedItem.
    console.log("Games updateContent event was fired!");
  }

  handleConsoleSelection (item) {
      console.log("handConsoleSelection item.id:" + item.id.toLowerCase());
      this.setState({consoleId: item.id.toLowerCase()});
      fetch("/games/" + item.id.toLowerCase()).then(response =>
        response.json().then(data => {
          this.setState({gameList: data.games});
        })
      )
      .catch(error=>{
        console.log(error)
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="menu">
          <ConsoleListDropdown consoleList={this.props.consoleList} onClickEvent={this.handleConsoleSelection}/>
          <ListView
              header="Collection"
              items= {this.state.gameList}
              button=<GameForm consoleContext={this.state.consoleId} consoleList={this.props.consoleList}/>
              onClickEvent={this.handleMenuSelection}
          />
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
          const link = "/games/"+ item.id.toLowerCase();
          return (
            <div key={item.id} onClick={() => props.onClickEvent(item)}>
              {item.id}
            </div>
          )
        })
      }
    </div>
  </div>
  );
}

export default Games;
