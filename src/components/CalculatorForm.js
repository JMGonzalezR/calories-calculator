import React, { useState } from 'react';
import './CalculatorForm.css';
import './RadioButton';
import RadioButton from './RadioButton';
import ToggleButton from './ToggleButton'

function CalculatorForm() {

    const [genderSelected, setGender] = useState('male');
    const [activityLevelSelected, setActivityLevel] = useState('low');
    const [goalsSelected, setGoals] = useState('lose');

    function genderChangeHandler(e)  {
        setGender(e.target.value)
    }

    function activityLevelChangeHandler(e)  {
        setActivityLevel(e.target.value);
        console.log(activityLevelSelected)
    }

    function goalsChangeHandler(e)  {
        setGoals(e.target.value)
        console.log(goalsSelected)
    }

    return (
        <div className="CalculatorForm">
            <h4 className="CalculatorForm-h4">Body Paramerets</h4>
            <div className="CalculatorForm-container">
                <ToggleButton type="radio" name="gender" value="male" isSelected={genderSelected === "male"} onChange={genderChangeHandler}>Male</ToggleButton>
                <ToggleButton type="radio" name="gender" value="female" isSelected={genderSelected === "female"} onChange={genderChangeHandler}>Female</ToggleButton>
            </div>
            <div className="CalculatorForm-container">
                <input type="text" className="CalculatorForm-textinput" placeholder="Age" />
                <input type="text" className="CalculatorForm-textinput" placeholder="Weight" />
                <input type="text" className="CalculatorForm-textinput" placeholder="Height" />
            </div>
            <h4 className="CalculatorForm-h4">Activity Level</h4>
            <p>Lorem Ipsum</p>
            <div className="CalculatorForm-container">
                <RadioButton label="Low" name="activityLevel" onChange={activityLevelChangeHandler} />
                <hr />
                <RadioButton label="Middle" name="activityLevel" onChange={activityLevelChangeHandler} style={{ marginLeft: '-7px' }} />
                <hr style={{ marginLeft: '-7px' }} />
                <RadioButton label="High" name="activityLevel" onChange={activityLevelChangeHandler}/>
                <hr />
                <RadioButton label="Very High" name="activityLevel" onChange={activityLevelChangeHandler} style={{ marginLeft: '-17px' }} />
            </div>
            <h4 className="CalculatorForm-h4">Goals</h4>
            <div className="CalculatorForm-container">
                <ToggleButton type="radio" name="goals" value="lose" isSelected={goalsSelected === "lose"} onChange={goalsChangeHandler}>Lose</ToggleButton>
                <ToggleButton type="radio" name="goals" value="lose10%" isSelected={goalsSelected === "lose10%"} onChange={goalsChangeHandler}>Lose 10%</ToggleButton>
                <ToggleButton type="radio" name="goals" value="maintain" isSelected={goalsSelected === "maintain"} onChange={goalsChangeHandler}>Maintain</ToggleButton>
                <ToggleButton type="radio" name="goals" value="gain" isSelected={goalsSelected === "gain"} onChange={goalsChangeHandler}>Gain</ToggleButton>
            </div>
            <div className="CalculatorForm-container">
                <button className="CalculatorForm-button"> <div className="CalculateButton-label">Calculate </div></button>
            </div>
        </div>
    );
}

export default CalculatorForm;
