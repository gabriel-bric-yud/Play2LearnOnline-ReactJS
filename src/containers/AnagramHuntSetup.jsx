import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import SelectInput from '../components/SelectInputs.jsx';

function AnagramHuntSetup(props) {

  let anagramLength = [[5,5],[6,6],[7,7],[8,8]]

  return (
    <Fragment>
      <div className = "row">
        <div className = "row mx-1 my-3 w-75">
          <SelectInput label = "Word Length" id = "wordLength" currentValue = {props.wordLength[0]} setCurrentValue = {props.setWordLength} values = {anagramLength}/>
        </div>
      </div>

      <div className = "row mx-1 my-1 px-4">
        <ol>
          <li>Choose Word Length.</li>
          <li>Press <strong>Play!</strong></li>
          <li>How many anagrams can you find in a minute?</li>
        </ol>
      </div>

      <div className = "row m-1 d-grid">
              <Link to = "/AnagramHuntGame" className = "btn btn-success my-2 w-75 mx-auto">Play!</Link>
            </div>
    </Fragment>
  )
}

export default AnagramHuntSetup;