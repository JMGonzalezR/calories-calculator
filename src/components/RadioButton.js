import React from 'react';
import './RadioButton.css';

function RadioButton(props) {
  return (
    <label className="RadioButton" style={props.style}>
        
        <input type="radio" name={props.name} />
        <span className="RadioButton-checkmark"></span>
        <div className="RadioButton-label">{props.label}</div>
        
    </label>
  );
}

export default RadioButton;
