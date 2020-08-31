import React, {useState, useEffect} from "react";
import {Form, Input, Button, Modal, Header} from "semantic-ui-react";
import '../css/GameForm.css';
import {TouchableHighlight, Text, StyleSheet} from "react-native";

export const GameForm = ({consoleContext, consoleList}) => {

    const [title, setTitle] = useState("");
    const [consoleId, setConsoleId] = useState(consoleContext);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect (() => {
      setConsoleId(consoleContext)
    }, [consoleContext])

    return (
      <Modal
        trigger={
          <TouchableHighlight
            onPress={() => {
              setModalOpen(true);
            }}
          >
            <Text style={styles.addButton}>Add</Text>
          </TouchableHighlight>}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <Modal.Content>
          <Modal.Description>
            <Header>Add a game to your collection</Header>
            <p>
              Include the title of the game and select the console.
            </p>
          </Modal.Description>
          <Form>
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
                  setModalOpen(false);
                }
              }}
              >
                Add
              </Button>
              <Button onClick={() => {
                  setModalOpen(false);
                }
              }
              >
                Cancel
              </Button>
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>
    );
}

var styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#111',
    fontWeight: 'bold',
    width: 150,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    cursor: 'pointer',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#56abf0'
  }
});
