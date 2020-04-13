import React from 'react';
import classNames from 'classnames';

import './ToggleButton.css'

function ToggleButton(props) {
  return (
    <label className={classNames('ToggleButton',
    props.isSelected && 'active')}
    > 
    
    <input className="ToggleButton-input" name={props.name} type={props.type} value={props.value} checked={props.isSelected} onChange={props.onChange}>
    </input>
    {props.children} </label>
  );
}

export default ToggleButton;