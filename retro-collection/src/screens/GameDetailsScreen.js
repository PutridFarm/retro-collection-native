import React from "react";
import {Text, View, StyleSheet} from "react-native";
import GameDetails from '../components/GameDetails';

const GameDetailsScreen = ({route, navigation}) => {
    const gameContext = route.params.params.gameContext;
    console.log("route.params: " + JSON.stringify(route.params.params.gameContext));
    console.log("gameContext: " + JSON.stringify(gameContext));

    return (
    <View style={{ backgroundColor: '#363c46', flex: 1, alignItems: 'center', padding: 10}}>
      <GameDetails game={gameContext}/>
    </View>
    )
}

var styles = StyleSheet.create({
  textShadow:{
    fontWeight: "bold",
    textShadowColor:'#585858',
    textShadowOffset:{width: 1, height: 1},
    textShadowRadius:2,
  }
});

export default GameDetailsScreen;
