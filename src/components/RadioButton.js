import React from 'react';
import './RadioButton.css';
import classNames from 'classnames';

function RadioButton(props) {
  return (
    <label className="RadioButton" style={props.style}>

      <input type="radio" name={props.name} value={props.value} onChange={props.onChange} checked={props.isSelected} />
      <span className="RadioButton-checkmark"></span>
      <div className={classNames('RadioButton-label',
        props.isSelected && 'active')}>{props.label}</div>

    </label>
  );
}

export default RadioButton;
