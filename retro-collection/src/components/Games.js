import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Error
} from "react-native";
import GameForm from './GameForm';
import GameList from "./GameList";
import ConsoleListDropdown from './ConsoleListDropdown';
import {getDatabaseURL} from '../utils';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const Games = ({navigation}) => {

    const [consoleList, setConsoleList] = useState([]);
    const [consoleId, setConsoleId] = useState("");
    const [gameList, setGameList] = useState([]);
    const [loading, isLoading] = useState(true);
    const [selectedGame, setSelectedGame] = useState({});

    const url = getDatabaseURL();

    useEffect (() => {
        fetchConsoleList();
      },[]);

    //Used on initial load to read the games list based on consoleId,
    //as well as subsequent changes to the consoleId
    useEffect (() => {
      //only query game list when consoleId has been set
      if(consoleId)
      {
        readGames(consoleId);
      }
    },[consoleId]);


    function handleMenuSelection (item) {
      setSelectedGame(item); //// TODO: Might not need selectedGame.
      console.log("Games updateContent event was fired! " + item.title);
      navigation.navigate('GameDetails', {
        title: item.title,
        screen: 'GameScreen',
        params: {gameContext: item},
      });
    };

    function handleConsoleSelection (consoleId) {
        console.log("handConsoleSelection item.id:" + consoleId);
        setConsoleId(consoleId);
    }

    //Performs a read given the console id, sets gameList state variable as the return value.
    function readGames(consoleId)
    {
      console.log("readGames consoleId:" + consoleId);
      fetch(url + "games/" + consoleId)
      .then(response => {
        return response.json()
      })
      .then(data => {
          setGameList(data.games);
          isLoading(false);
        })
      .catch(error=>{
        console.log(error)
      });
    }

    function handleRefresh()
    {
      console.log("handleRefresh...consoleId:" + consoleId);
      readGames(consoleId);
    }

    /*Reads the console list from the database, setting the global
      console list variable. Initializes the consoleId as the first console
      in the list*/
    function fetchConsoleList() {
      console.log("fetchingConsoleList...")
      fetch(url + "consoles")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setConsoleList(data.consoles);
        //Assumes data.consoles returns consoles, otherwise will throw an error - add check?
        setConsoleId(data.consoles[0].id); 
      })
      .catch(error=>{
        console.log(error)
      });
    }

    return (
      <View>
          <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
            <ConsoleListDropdown 
              consoleList={consoleList} 
              selectedValue={consoleId} 
              styles={styles} 
              onValueChange={handleConsoleSelection}
            />
            <GameForm
              consoleContext={consoleId} 
              consoleList={consoleList}
              onSuccess={handleRefresh}
            />
          </View>
          <View>
            {loading ? (
            <View style={{justifyContent: 'center'}}><ActivityIndicator
                  color='#4488c0'
                  size='large'
                /></View>
            ) : (
              <GameList
                games={gameList}
                onPress={handleMenuSelection}
                onRefresh={handleRefresh}
              />
            )}
          </View>
      </View>
  );
}

var styles = StyleSheet.create({
  consoleListDropdown: {
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#4488c0',
    width: 150
  },
  dropDownButton: {
    backgroundColor: '#111',
    color: '#FFF'
  }
});

export default Games;
