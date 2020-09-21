import React, { Component } from "react";
import {Text, View, ScrollView, TouchableHighlight, StyleSheet} from "react-native";
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
      <ScrollView contentContainerStyle={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{justifyContent: 'center', borderWidth: 2, width: 200, height: 200, marginBottom: 10}}>
            <Text>YOUR_IMAGE_HERE</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'stretch'}}>
            <View style={{
              padding: 10, 
              borderRadius: 25,
              borderWidth: 2,
              borderColor: '#4488c0',
              backgroundColor: '#2D333B',
              marginVertical: 10
            }}>
              <Text style={{color: '#D8D8D8'}}>Purchase: $15.00</Text>
            </View>
            
            <GameFormEdit gameContext={game}/>
            <View style={{
              padding: 10, 
              borderRadius: 25,
              borderWidth: 2,
              borderColor: '#4488c0',
              backgroundColor: '#2D333B',
              marginVertical: 10
            }}>
              <Text style={{color: '#D8D8D8'}}>Current: $20.00</Text>
            </View>
          </View>
          <View style={{
              padding: 10, 
              borderRadius: 25,
              borderWidth: 2,
              borderColor: '#4488c0',
              backgroundColor: '#2D333B',
              marginTop: 10,
            }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#CECECE', fontSize: 20, fontWeight: "bold"}}>
                  Description
                </Text>
              </View>
              <Text style={{color: '#CECECE',fontSize: 18, marginVertical: 10}}>
                {game.title} is an Action RPG game developed by Square in 1994. It features the main character Randi along with his group members Blank and Blank
              </Text>
            </View>
            <View style={{
              padding: 10, 
              borderRadius: 25,
              borderWidth: 2,
              borderColor: '#4488c0',
              backgroundColor: '#2D333B',
              marginTop: 10,
            }}>
              <View style={{flexDirection: 'row'}}>
                <Text style={{color: '#CECECE', fontSize: 20, fontWeight: "bold"}}>
                  Notes
                </Text>
              </View>
              <Text style={{color: '#CECECE',fontSize: 18, marginVertical: 10}}>
                Bought this game at a yard sale back in Aug 2019. It's players choice edition and I would like to get another one.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
            
        </ScrollView>
    );
}

export default GameDetails;
