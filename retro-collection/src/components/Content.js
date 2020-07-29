import React, { Component, useEffect , useState} from "react";
import {GameForm} from './GameForm';
import {ListView} from './ListView';

export function Content(props) {
  const[message, setMessage] = useState("Content has been updated!");

    return (
      <React.Fragment>
        <div className="menu">
          <GameMenu consoleId={props.consoleId} onClickEvent={() => setMessage(message)}/>
        </div>
        <div className="games-content">
          <p>
            {message}
          </p>
        </div>
      </React.Fragment>
    );
}

function GameMenu (props){
  const [gamesList, setGames] = useState([]);
  const consoleId = (props.consoleId);
  useEffect(() => {
    fetch("/games/" + consoleId).then(response =>
      response.json().then(data => {
        setGames(data.games);
      })
    )
    .catch(error=>{
      console.log(error)
    });
  }, []);

  console.log("ConsoleId = " + consoleId);
  console.log(gamesList);

  return (
    <ListView
        header="Collection"
        items= {gamesList}
        button=<GameForm consoleContext={consoleId}/>
        onClickEvent={(props.onClickEvent)}
    />
  );
}
