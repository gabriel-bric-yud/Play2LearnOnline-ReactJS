import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import SelectInput from '../components/SelectInputs.jsx';

function MathFactsSetup(props) {

  const operations = [
    ['Addition','+'],
    ['Subtraction', '-'],
    ['Multiplication', 'x'],
    ['Division', '/']
  ]
  const numbers = [];
  for (let number = 2; number <= 100; number++) {
    numbers.push([number, number]);
  }
  
  return(
    <Fragment>
      <div className = "row">
          <div className = "col col-sm">
            <div className = "row mx-1 my-3">
              <SelectInput label = "Operations" id= "operation" currentValue = {props.operation[0]} setCurrentValue = {props.setOperation} values = {operations}/>
            </div>
            <div className = "row mx-1 my-3">
              <SelectInput label="Maximum Number" id= "maxNumber" currentValue = {props.maxNumber[0]} setCurrentValue = {props.setMaxNumber} values={numbers} />
            </div>
          </div>
          <div className = "col col-auto align-content-center">
            <div className = "row mx-1 my-3 d-grid">
              <Link to = "/MathFactsGame" className = "btn btn-success">Go</Link>
            </div>
          </div>
      </div>

      <div className = "row mx-1 my-3 p-4">
        <ol>
          <li>Choose Operation.</li>
          <li>Choose Max Number.</li>
          <li>Press <strong>Go.</strong></li>
          <li>How many problems can you solve in 30 seconds?</li>
        </ol>
      </div>
    </Fragment>

  )
}

export default MathFactsSetup;