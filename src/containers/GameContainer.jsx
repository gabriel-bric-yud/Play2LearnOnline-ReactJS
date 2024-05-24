import React from "react";
import Label from "../components/Label";

function GameContainer(props) {
  return (
    <main className = "container-fluid d-grid justify-content-center p-0">
      <div className = "gameContainer border border-info m-1 d-grid justify-content-center">
        <div className = "card-header">
          <Label text = {props.text}></Label>
        </div>
        {props.content}
      </div>
    </main>
  )
}

export default GameContainer;