import React, {useState, useEffect} from "react";
import ConsoleListDropdown from './ConsoleListDropdown';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Modal,
  Alert
} from 'react-native';
import {getDatabaseURL, postDataAsync, isEmptyOrSpaces} from '../utils';

export const GameForm = ({consoleContext, consoleList, onSuccess}) => {

    const [title, setTitle] = useState("");
    const [consoleId, setConsoleId] = useState(consoleContext);
    const [modalVisible, setModalVisible] = useState(false);

    const url = getDatabaseURL();

    useEffect (() => {
      setConsoleId(consoleContext)
    }, [consoleContext])

    function handleOkayButtonClick() {
      const isValid = validateInput();
      if(isValid) {
        sendAddGameRequest();
      }
    }

    function validateInput() {
      if (isEmptyOrSpaces(title)) {
        Alert.alert(
          'Error validating input',
          'Title cannot be blank',
          [{ text: 'OK'}],
          { cancelable: false }
        );
        return false;
      }
      return true;
    }

    async function sendAddGameRequest () {
      const game = {title, consoleId};
      const response = await fetch(url + '/add_game', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(game)
      })
    
      if (response.ok) {
        console.log('response is ok from /add_game!');
        onSuccess();
        setModalVisible(false);
      }
      else {
        Alert.alert(
          'Error Adding Game',
          'An error occured when attempting to add the game. Please try again later.',
          [{ text: 'OK'}],
          { cancelable: false }
        );
      }
    }

    function AddButton () {
      return (
        <TouchableHighlight
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{color: '#FFF', fontSize: 22}}>+</Text>
        </TouchableHighlight>
      );
    }

    function OkayButton () {
      return (
          <TouchableHighlight 
            style={styles.modalButton}  
            onPress={() => handleOkayButtonClick()}
          >
            <Text style={{fontSize: 20, color: '#D8D8D8'}}>Okay</Text>
          </TouchableHighlight>
      );
    }

    function CancelButton () {
      return (
        <TouchableHighlight 
          style={styles.modalButton} 
          onPress={() => setModalVisible(false)}
        >
          <Text style={{fontSize: 20, color: '#D8D8D8'}}>Cancel</Text>
        </TouchableHighlight>
      );
    }

    return (
      <React.Fragment>
        <Modal animationType="slide" visible={modalVisible} transparent={true} shadowOpacity={0.5}>
          <View style={{flex:1, backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>{/*modal content*/}
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  Add a game to your collection
                  {'\n'}
                  {'\n'}
                  Include the title of the game and select the console.
                </Text>
                <TextInput
                  style={styles.modalTextInput}
                  maxLength={50}
                  placeholder="Title"
                  onChangeText={title => setTitle(title)}
                  defaultValue={title}
                />
                <ConsoleListDropdown consoleList={consoleList} selectedValue={consoleId} styles={styles} onValueChange={setConsoleId}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <OkayButton/>
                  <CancelButton/>
                </View>
              </View>
          </View>{/*modal content*/}
        </Modal>
        <AddButton/>
      </React.Fragment>
    );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#111',
    width: 44,
    height: 44,
    color: '#FFF',
    borderRadius: 44,
    borderWidth: 3,
    borderColor: '#4488c0',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalTextInput:
  {
    height: 40,
    width: 160,
    backgroundColor: '#D8D8D8',
    padding: 5
  },
  modalView: {
    margin: 20,
    backgroundColor: '#2D333B',
    borderRadius: 5,
    borderWidth: 3,
    borderColor: '#4488c0',
    padding: 35,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#D8D8D8'
  },
  modalButton: {
    backgroundColor: '#363c46',
    width: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4488c0',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  consoleListDropdown: {
    width: 160,
    margin: 5
  },
  dropDownItem: {
    color: '#FF0000'
  },
  dropDownButton: {
    backgroundColor: '#D8D8D8',
  }
});
