import React from 'react';
import './CalculatorForm.css';
import './RadioButton';
import RadioButton from './RadioButton';

function CalculatorForm() {
    return (
        <div className="CalculatorForm">
            <h4 className="CalculatorForm-h4">Body Paramerets</h4>
            <div className="CalculatorForm-container">
                <button className="CalculatorForm-button"> Male </button>
                <button className="CalculatorForm-button"> Female </button>
            </div>
            <div className="CalculatorForm-container">
                <input type="text" className="CalculatorForm-textinput" placeholder="Age" />
                <input type="text" className="CalculatorForm-textinput" placeholder="Weight" />
                <input type="text" className="CalculatorForm-textinput" placeholder="Height" />
            </div>
            <h4 className="CalculatorForm-h4">Activity Level</h4>
            <p>Lorem Ipsum</p>
            <div className="CalculatorForm-container">
                <RadioButton label="Low" name="activityLevel"/>
                <hr/>
                <RadioButton label="Middle" name="activityLevel" style={{marginLeft:'-7px'}}/>
                <hr style={{marginLeft:'-7px'}}/>
                <RadioButton label="High" name="activityLevel"/>
                <hr/>
                <RadioButton label="Very High" name="activityLevel" style={{marginLeft:'-17px'}}/>
            </div>
            <h4 className="CalculatorForm-h4">Goals</h4>
            <div className="CalculatorForm-container">
                <button className="CalculatorForm-button"> Lose </button>
                <button className="CalculatorForm-button"> Lose 10% </button>
                <button className="CalculatorForm-button"> Maintain </button>
                <button className="CalculatorForm-button"> Gain </button>
            </div>
            <div className="CalculatorForm-container">
                <button className="CalculatorForm-button"> Calculate </button>
            </div>
        </div>
    );
}

export default CalculatorForm;
