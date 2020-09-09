import React, { Component } from "react";
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

class GameScreen extends Component {

  constructor(props) {
    super(props);
    this.state= {
      consoleId:"snes",
      selectedGame: {},
      gameList:[],
      loading:true,
      addGameModalVisible: false
    };
    this.handleMenuSelection = this.handleMenuSelection.bind(this);
    this.handleConsoleSelection = this.handleConsoleSelection.bind(this);
  }

  setAddGameModalVisible(visible)
  {
    this.setState({addGameModalVisible: visible});
  }

  handleMenuSelection (item) {
    this.setState({selectedGame: item}); //// TODO: Might not need selectedGame.
    console.log("Games updateContent event was fired!");
  }

  componentDidMount () {
    this.handleConsoleSelection(this.state.consoleId);
  }

  handleConsoleSelection (consoleId) {
      console.log("handConsoleSelection item.id:" + consoleId.toLowerCase());
      fetch("/games/" + consoleId.toLowerCase()).then(response =>
        response.json().then(data => {
          this.setState({gameList: data.games, consoleId: consoleId.toLowerCase(), loading: false});
        })
      )
      .catch(error=>{
        console.log(error)
      });
  }

  render() {
    return (
    <React.Fragment>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{padding: 10}}><ConsoleListDropdown consoleList={this.props.consoleList} onClickEvent={this.handleConsoleSelection}/></View>
          <View style={{padding: 10}}>
            <Modal
              animationType="slide"
              isVisible={this.state.addGameModalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <GameForm consoleContext={this.state.consoleId} consoleList={this.props.consoleList}/>
                </View>
              </View>
            </Modal>
            <TouchableHighlight
                  onPress={() => {
                    this.setAddGameModalVisible(true);
                  }}
                >
              <Text style={styles.addButton}>Add</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View>
          <ScrollView
            noSpacer={true}
            noScroll={true}
            style={styles.container}
          >
          {this.state.loading ? (
           <ActivityIndicator
                style={[styles.centering]}
                color="#ff8179"
                size="large"
              />
          ) : (
            <GameList games={this.state.gameList} onPress={this.handleMenuSelection}/>
          )}
          </ScrollView>
        </View>
      </View>
      <Content item={this.state.selectedGame} />
    </React.Fragment>
    );
  }
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
    fontWeight: 'bold',
    width: 150,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
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

export default GameScreen;
