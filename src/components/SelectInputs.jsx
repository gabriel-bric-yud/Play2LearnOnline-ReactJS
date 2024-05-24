import React, {Fragment} from 'react';



function SelectInput(props) { //{label, id, values, currentValue, setCurrentValue}
  const selectOptions = props.values.map((value) =>
    <option value = {value[1]} key = {value[0].toString()}>{value[0]}</option>
  );

  return (
    <Fragment>
      <label htmlFor={props.id} className="col fw-bold">{props.label} </label>
      <select id = {props.id} defaultValue = {props.currentValue} onChange = {(e) =>  props.setCurrentValue([e.target.querySelector('option:checked').textContent, e.target.value])} className="col form-control">
        {selectOptions}
      </select> <br />    
    </Fragment>
  )
}

export default SelectInput;