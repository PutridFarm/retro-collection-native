import React, { Component, useEffect , useState} from "react";
import {GameForm} from './GameForm';
import {ListView} from './ListView';

class Content extends Component{

  constructor(props) {
    super(props);
    this.state = {currentItem: {}};
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent (item) {
    this.setState({currentItem: item});
    console.log("item was clicked: " + item.title);

  }

  render(){
    return (
      <React.Fragment>
        <div className="menu">
          <GameMenu consoleId={this.props.consoleId} onClickEvent={this.updateContent}/>
        </div>
        <div className="games-content">
          <h1>
            {this.state.currentItem.title}
          </h1>
          <p>
            {this.state.currentItem.text}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

function GameMenu (props){
  const [gamesList, setGames] = useState([]);
  const consoleId = (props.consoleId);
  useEffect(() => {
    fetch("/games/" + consoleId).then(response =>
      response.json().then(data => {
        setGames(data.games);
      })
    )
    .catch(error=>{
      console.log(error)
    });
  }, []);

  console.log("ConsoleId = " + consoleId);
  console.log(gamesList);

  return (
    <ListView
        header="Collection"
        items= {gamesList}
        button=<GameForm consoleContext={consoleId}/>
        onClickEvent={props.onClickEvent}
    />
  );
}

export default Content;
