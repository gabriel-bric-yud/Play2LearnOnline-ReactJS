import React from "react";

function ClearButton(props) {
  return (
    <button className = "btn btn-success clearbutton" onClick = {(e) => props.handleClick('')}>Clear</button>
  )
}

export default ClearButton;