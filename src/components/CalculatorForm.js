import React, { useState } from 'react';
import './CalculatorForm.css';
import './RadioButton';
import RadioButton from './RadioButton';
import ToggleButton from './ToggleButton'

function CalculatorForm() {

    const [genderSelected, setGender] = useState('male');
    const [activityLevelSelected, setActivityLevel] = useState('low');
    const [goalsSelected, setGoals] = useState('lose');

    const optionsActivityLevelText = {
        low:"Low: Sendantary type of activity, it's everyday activity that includes walking, driving a car, working, eating, etc.",
        middle:"Middle: Activity that burns an addiontional 400-650 calories for females or 500-800 calories doe males.",
        high: "High: Spicy jalapeno bacon ipsum dolor amet beef ham hock picanha swine andouille ham, burgdoggen bacon.",
        veryhigh: "Very High: Bacon ipsum dolor amet porchetta sirloin minim, labore burgdoggen chicken sint jowl. Brisket meatloaf kevin pork belly."
    };

    function genderChangeHandler(e) {
        setGender(e.target.value)
    }

    function activityLevelChangeHandler(e) {
        setActivityLevel(e.target.value);
    }

    function goalsChangeHandler(e) {
        setGoals(e.target.value)
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
            <p className="CalculatorForm-activityLevelText">{optionsActivityLevelText[activityLevelSelected]}</p>
            <div className="CalculatorForm-container">
                <RadioButton label="Low" value="low" name="activityLevel" isSelected={activityLevelSelected === "low"} onChange={activityLevelChangeHandler} />
                <hr />
                <RadioButton label="Middle" value="middle" name="activityLevel" isSelected={activityLevelSelected === "middle"} onChange={activityLevelChangeHandler} style={{ marginLeft: '-7px' }} />
                <hr style={{ marginLeft: '-7px' }} />
                <RadioButton label="High" value="high" name="activityLevel" isSelected={activityLevelSelected === "high"} onChange={activityLevelChangeHandler} />
                <hr />
                <RadioButton label="Very High" value="veryhigh" name="activityLevel" isSelected={activityLevelSelected === "veryhigh"} onChange={activityLevelChangeHandler} style={{ marginLeft: '-17px' }} />
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
