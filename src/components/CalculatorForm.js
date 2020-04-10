import React from 'react';
import './CalculatorForm.css';

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
                <input type="radio" />
                <label>Low</label>
                <input type="radio" />
                <label>Middle</label>
                <input type="radio" />
                <label>High</label>
                <input type="radio" />
                <label>Very High</label>
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
