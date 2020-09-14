import React, { useState, useEffect } from "react";
//import './css/games.css';
import Content from '../components/Content';
import {GameForm} from '../components/GameForm';
import {
  Alert,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  View,
  Picker,
  Text,
  TouchableHighlight
} from "react-native";
import GameList from "../components/GameList";
import ModalTest from "../ModalTest";
import Modal from 'react-native-modal';

export const Games = () => {

    const [consoleList, setConsoleList] = useState([]);
    const [consoleId, setConsoleId] = useState("");
    const [gameList, setGameList] = useState([]);
    const [loading, isLoading] = useState(true);
    const [addGameModalVisible, setGameModalVisible] = useState(false);
    const [selectedGame, setSelectedGame] = useState({});

    const url = "http://192.168.0.134:5000/";

    useEffect (() => {
        fetchConsoleList();
      },[]);

      useEffect (() => {
        console.log("In consoleId useEffect!:" + consoleId);
        //only query game list when consoleId has been set
        if(consoleId)
        {
          handleConsoleSelection(consoleId);
        }
      },[consoleId]);


  function handleMenuSelection (item) {
    setSelectedGame(item); //// TODO: Might not need selectedGame.
    console.log("Games updateContent event was fired!");
  };

  function handleConsoleSelection (consoleId) {
      console.log("handConsoleSelection item.id:" + consoleId);
      
      setConsoleId(consoleId);

      fetch(url + "games/" + consoleId).then(response =>
        response.json().then(data => {
          setGameList(data.games);
          isLoading(false);
        })
      )
      .catch(error=>{
        console.log(error)
      });
      
  }

  function fetchConsoleList() {
    fetch(url + "consoles")
     .then(response => {
       return response.json()
     })
     .then(data => {
        setConsoleList(data.consoles);
        //Initialize the consoleId as the first selection from the console list.
        //Assumes data.consoles returns consoles, otherwise will throw an error - add check?
        setConsoleId(data.consoles[0].id); 
     })
     .catch(error=>{
       console.log(error)
     });
  }

  function ConsoleListDropdown () {
    return (
      <View style={styles.consoleListDropdown}>
        <Picker
            style={styles.dropDownButton}
            onValueChange={(itemValue) => {
              handleConsoleSelection(itemValue);
            }}
            selectedValue={consoleId}
          >
          {
            consoleList.map(item => {
              return (
                  <Picker.Item label={item.name} key={item.id} value={item.id} />
              )
            })
          }
        </Picker>
      </View>
    );
  }

    return (
      <React.Fragment>
          <View style={{padding: 10}}>
            <ConsoleListDropdown consoleList={consoleList}/>
          </View>
          <View> 
            <GameList
              games={gameList}
              onPress={handleMenuSelection}
            />
          </View>
      </React.Fragment>
    );
  }

/*
<Pressable onPress={onPress} style={({pressed})=> [styles.row, { backgroundColor: pressed ? '#818489' : '#2D333B' }]}>
  <Text style={styles.rowDataText}>{`${game.title}`}</Text>
  <Text style={styles.rowDataSubText}>{game.consoleId}</Text>
</Pressable>*/

var styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#111',
    fontWeight: 'bold',
    width: 150,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#56abf0'
  },
  consoleListDropdown: {
    borderRadius: 5,
    borderWidth: 6,
    borderColor: '#56abf0',
    width: 150
  },
  dropDownButton: {
    backgroundColor: '#111',
    color: '#FFF',
    //fontSize: 16,
  }
});

/* Dropdown Content (Hidden by Default)
.console-list-dropdown-content {
  display: none;
  position: absolute;
  background-color: #111;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
} */

export default Games;
