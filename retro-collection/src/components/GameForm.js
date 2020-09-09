import React, {useState, useEffect} from "react";
//import '../css/GameForm.css';
import {
  Alert,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';
import Modal from 'react-native-modal';

export const GameForm = ({consoleContext, consoleList}) => {

    const [title, setTitle] = useState("");
    const [consoleId, setConsoleId] = useState(consoleContext);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect (() => {
      setConsoleId(consoleContext)
    }, [consoleContext])

    return (
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add a game to your collection</Text>
          <Text>Include the title of the game and select the console.</Text>
          {/*<Form>
            <Form.Field>
              <Input
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <select defaultValue={consoleContext} id="consoles" className="consoles" onChange={e => setConsoleId(e.target.value)}>
                {
                  consoleList.map(item => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.id}
                      </option>
                    )
                  })
                }
              </select>
            </Form.Field>
            <Form.Field>
              <Button onClick={async () => {
                const game = {title, consoleId};
                const response = await fetch('/add_game', {
                  method: 'POST',
                  headers: {
                    'Content-Type':'application/json'
                  },
                  body: JSON.stringify(game)
                })

                if (response.ok) {
                  console.log('response from /add_game!');
                  setModalVisible(false);
                }
              }}
              >
                Add
              </Button>
              <Button onClick={() => {
                  setModalVisible(false);
                }
              }
              >
                Cancel
              </Button>
            </Form.Field>
          </Form>
          */}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
