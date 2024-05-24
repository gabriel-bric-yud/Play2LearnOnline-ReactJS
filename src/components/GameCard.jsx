import React from "react";
import {Link} from 'react-router-dom';
import Label from "./Label.jsx";


function GameCard(props) {
  const descriptionContainers = props.description.map((value) =>
    <p className = "p-2" key = {value[0]}>{value[1]}</p>
  );

  return (
    <div className = "gamecard border border-info m-1 d-grid card flex-fill">
      <Label text = {props.title} textWeight = {props.textWeight} />
      {descriptionContainers}
      <div className = "card-footer align-self-end mt-2">
        <Link className = "btn btn-success" to= {props.redirect} style = {{textDecoration: "none", color: "white"}}>Play now!</Link>
      </div>
    </div>
  )
}

export default GameCard;