import React from "react";
import {StyleSheet,SafeAreaView} from "react-native";
import GameDetails from '../components/GameDetails';

const GameDetailsScreen = ({route, navigation}) => {
    const gameContext = route.params.gameContext;
    console.log("route.params: " + JSON.stringify(route.params.gameContext));
    console.log("gameContext: " + JSON.stringify(gameContext));

    return (
    <SafeAreaView style={{ backgroundColor: '#363c46', flexGrow: 1, alignItems: 'center', padding: 10}}>
      <GameDetails gameContext={gameContext}/>
    </SafeAreaView>
    )
}

export default GameDetailsScreen;
