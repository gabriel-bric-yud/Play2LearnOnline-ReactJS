import React from "react";
import Label from "./Label";


function Score(props) {
  return (
    <div className = "d-flex mx-auto">
      <Label text = {`Score: ${props.score}`} textWeight = {props.textWeight} />
    </div>
  )
}

export default Score;