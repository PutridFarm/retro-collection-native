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
import GameList from "../components/game-list";
import ModalTest from "../ModalTest";
import Modal from 'react-native-modal';

export const Games = () => {

    const [consoleList, setConsoleList] = useState([]);
    const [consoleId, setConsoleId] = useState("snes");
    const [gameList, setGameList] = useState([]);
    const [loading, isLoading] = useState(true);
    const [addGameModalVisible, setGameModalVisible] = useState(false);
    const [selectedGame, setSelectedGame] = useState({});

    const url = "http://192.168.0.134:5000/";

    useEffect (() => {
        //setConsoleList(consoles);
        //handleConsoleSelection(consoleId);
        fetchConsoleList();
      },[]);


  function handleMenuSelection (item) {
    setSelectedGame(item); //// TODO: Might not need selectedGame.
    console.log("Games updateContent event was fired!");
  };

  function handleConsoleSelection (consoleId) {
      console.log("handConsoleSelection item.id:" + consoleId.toLowerCase());
      fetch(url + "games/" + consoleId.toLowerCase()).then(response =>
        response.json().then(data => {
          setGameList(data.games);
          setConsoleId(consoleId.toLowerCase());
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
     })
     .catch(error=>{
       console.log(error)
     });
  }

    return (
          <ConsoleListDropdown consoleList={consoleList} onClickEvent={handleConsoleSelection}/>
    );
  }

/*
<Pressable onPress={onPress} style={({pressed})=> [styles.row, { backgroundColor: pressed ? '#818489' : '#2D333B' }]}>
  <Text style={styles.rowDataText}>{`${game.title}`}</Text>
  <Text style={styles.rowDataSubText}>{game.consoleId}</Text>
</Pressable>*/
function ConsoleListDropdown (props) {
  const consoleList = props.consoleList;
  const onClickEvent = props.onClickEvent;
  return (

    <View style={styles.consoleListDropdown}>
      <Picker
          style={styles.dropDownButton}
          onValueChange={(itemValue, itemIndex) => onClickEvent(itemValue)}
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

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D333B',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#56abf0'
  },
  centering: {
    alignItems: 'center',
    justifyContent: "center",
    padding: 8,
    height: '100vh'
  },
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
    position: 'relative'
  },
  dropDownButton: {
    backgroundColor: '#111',
    //fontWeight: 'bold',
    width: 150,
    color: '#FFF',
    padding: 16,
    //fontSize: 16,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#56abf0'
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
