import React, { Component, useEffect, useState} from "react";
import {Text, View, ScrollView, TouchableHighlight, StyleSheet, Image} from "react-native";
import {GameFormEdit} from './GameFormEdit';
import {getDatabaseURL} from '../utils';

const GameDetails = ({gameContext}) => {
  
  const [game, setGame] = useState(gameContext);
  const [loading, isLoading] = useState(true);
  const [imagePath, setImagePath] = useState("");
  const exampleImageURI = Image.resolveAssetSource('../images/paypal_donate.png');

  const url = getDatabaseURL();

  useEffect (() => {
    readGameDetails();
    console.log("ExampleImageURI: " + exampleImageURI);
  }, [gameContext]);
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

  function readGameDetails() {
    fetch(url + "game?id=" + gameContext.id)
      .then(response => {
        return response.json()
      })
      .then(data => {
          setGame(data.game);
          setImagePath('../' + data.game.images[0].path);
          console.log("Image Path: " + '../' + data.game.images[0].path);
          isLoading(false);
        })
      .catch(error=>{
        console.log(error)
      });
  }

  console.log("GameDetails: game" + game);
    return (
      <ScrollView contentContainerStyle={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{justifyContent: 'center', borderWidth: 2, width: 200, height: 200, marginBottom: 10}}>
            <Image style={styles.image} source={{uri: '../images/paypal_donate.png'}} alt="game_image"/>
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
                  Notes
                </Text>
              </View>
              <Text style={{color: '#CECECE',fontSize: 18, marginVertical: 10}}>
                {game.text}
              </Text>
              <Text>{imagePath}</Text>
            </View>
        </ScrollView>
    );
}

var styles = StyleSheet.create({
  image: {
    width: 200,
    height: 150,
  }
});

export default GameDetails;
