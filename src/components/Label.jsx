import React from "react";

function Label(props) {
  return(
    <div className = "label container-sm justify-content-center d-grid p-2">
      <h2 style = {{fontSize: [props.textWeight]}}>{props.text}</h2>
    </div>
  )
}

export default Label;