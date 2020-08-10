import React, {useState, useEffect} from "react";
import {Form, Input, Button, Modal, Header} from "semantic-ui-react";
import '../css/GameForm.css';

export const GameForm = ({consoleContext}) => {

    const [title, setTitle] = useState("");
    const [consoleId, setConsoleId] = useState(consoleContext);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect (() => {
      setConsoleId(consoleContext)
    }, [consoleContext])

    const consoleOptions = [
      {
        key: 'nes',
        text: 'NES',
        value: 'nes'
      },
      {
        key: 'snes',
        text: 'SNES',
        value: 'snes'
      },
      {
        key: 'n64',
        text: 'N64',
        value: 'n64'
      }
    ]
    console.log("consoleContext:" + consoleContext);
    return (
      <Modal
        trigger={<Button circular onClick={() => setModalOpen(true)}>+</Button>}
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
                  consoleOptions.map(item => {
                    return (
                      <option key={item.key} value={item.value}>
                        {item.text}
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
