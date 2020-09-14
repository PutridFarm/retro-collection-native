import React, { Component } from "react";
import {GameFormEdit} from './GameFormEdit';


class GameContent extends Component{
  
 //"/games/" + item.consoleId.toLowerCase() + "/current-price?game=" + item.title
  fetchPrice = (item) => {
   fetch('/games/snes/current-price?game=' + item.title)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({ currentPrice: data.price});
    })
    .catch(error=>{
      console.log(error)
    })
  }

  render(){
    return (
      <div className="games-content">
        <h1>
          {this.props.item.title}
        </h1>
        <div>
            {this.props.item.text}
            <GameFormEdit gameContext={this.props.item}/>
            {this.props.price}
        </div>
      </div>
    );
  }
}

export default Content;
