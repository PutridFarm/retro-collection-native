import React, { Component } from "react";
import {Text, View} from "react-native";
import {GameFormEdit} from './GameFormEdit';


const GameDetails = ({game}) => {
  
 //"/games/" + item.consoleId.toLowerCase() + "/current-price?game=" + item.title
  /*fetchPrice = (item) => {
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
  }*/
  console.log("GameDetails: game" + game);
    return (
        <View>
        <View style={{
          padding: 10, 
          borderRadius: 5,
          borderWidth: 2,
          borderColor: '#4488c0',
          backgroundColor: '#2D333B',
          marginTop: 10,
          width: 300,
          height: 300
        }}>
          <Text>YOUR_IMAGE_HERE</Text>
        </View>
          <Text>Game{game.title}{game.consoleId}</Text>
        </View>
    );
}

export default GameDetails;
