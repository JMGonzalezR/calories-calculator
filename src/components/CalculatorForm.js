import React, { useState } from 'react';
import './CalculatorForm.css';
import './RadioButton';
import RadioButton from './RadioButton';
import ToggleButton from './ToggleButton'

function CalculatorForm({
    setResult,
    setHasResult
}) {

    const [genderSelected, setGender] = useState('male');
    const [activityLevelSelected, setActivityLevel] = useState(1.2);
    const [goalsSelected, setGoals] = useState('lose');
    const [age, setAge] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

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
        
        setActivityLevel(parseFloat(e.target.value));
    }

    function goalsChangeHandler(e) {
        setGoals(e.target.value)
    }

    function onClickCalculate(){
        //bmr = Basal Metabolic Rate
        let bmr = 0;
        //This is the Harris-Benedict formula in US units(lbs/in)
        if(genderSelected === "male") {
            bmr = 66 +(6.3 * weight) + (12.9 * height) - (6.8 * age)
        }
        else{
            bmr = 655 +(4.3 * weight) + (4.7 * height) - (4.7 * age)
        }
        
        const dailyCalories = bmr * activityLevelSelected;
        setHasResult(true);
        setResult(dailyCalories);
        console.log(dailyCalories)
       
    }

    return (
        <div className="CalculatorForm">
            <h4 className="CalculatorForm-h4">Body Paramerets</h4>
            <div className="CalculatorForm-container">
                <ToggleButton type="radio" name="gender" value="male" isSelected={genderSelected === "male"} onChange={genderChangeHandler}>Male</ToggleButton>
                <ToggleButton type="radio" name="gender" value="female" isSelected={genderSelected === "female"} onChange={genderChangeHandler}>Female</ToggleButton>
            </div>
            <div className="CalculatorForm-container">
                <input type="number" className="CalculatorForm-textinput" placeholder="Age" onChange={(e)=> setAge(e.target.value)}/>
                <input type="number" className="CalculatorForm-textinput" placeholder="Weight" onChange={(e)=> setWeight(e.target.value)}/>
                <input type="number" className="CalculatorForm-textinput" placeholder="Height" onChange={(e)=> setHeight(e.target.value)}/>
            </div>
            <h4 className="CalculatorForm-h4">Activity Level</h4>
            <p className="CalculatorForm-activityLevelText">{optionsActivityLevelText[activityLevelSelected]}</p>
            <div className="CalculatorForm-container">
                <RadioButton label="Low" value={1.2} name="activityLevel" isSelected={activityLevelSelected === 1.2} onChange={activityLevelChangeHandler} />
                <hr />
                <RadioButton label="Middle" value={1.375} name="activityLevel" isSelected={activityLevelSelected === 1.375} onChange={activityLevelChangeHandler} style={{ marginLeft: '-7px' }} />
                <hr style={{ marginLeft: '-7px' }} />
                <RadioButton label="High" value={1.55} name="activityLevel" isSelected={activityLevelSelected === 1.55} onChange={activityLevelChangeHandler} />
                <hr />
                <RadioButton label="Very High" value={1.725} name="activityLevel" isSelected={activityLevelSelected === 1.725} onChange={activityLevelChangeHandler} style={{ marginLeft: '-17px' }} />
            </div>
            <h4 className="CalculatorForm-h4">Goals</h4>
            <div className="CalculatorForm-container">
                <ToggleButton type="radio" name="goals" value="lose" isSelected={goalsSelected === "lose"} onChange={goalsChangeHandler}>Lose</ToggleButton>
                <ToggleButton type="radio" name="goals" value="lose10%" isSelected={goalsSelected === "lose10%"} onChange={goalsChangeHandler}>Lose 10%</ToggleButton>
                <ToggleButton type="radio" name="goals" value="maintain" isSelected={goalsSelected === "maintain"} onChange={goalsChangeHandler}>Maintain</ToggleButton>
                <ToggleButton type="radio" name="goals" value="gain" isSelected={goalsSelected === "gain"} onChange={goalsChangeHandler}>Gain</ToggleButton>
            </div>
            <div className="CalculatorForm-container">
                <button className="CalculatorForm-button" onClick={onClickCalculate}> <div className="CalculateButton-label">Calculate </div></button>
            </div>
        </div>
    );
}

export default CalculatorForm;
