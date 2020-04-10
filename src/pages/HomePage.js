import React from 'react';
import './HomePage.css';
import CalculatorForm from '../components/CalculatorForm'

function HomePage() {
  return (
    <div className="Home">
        <div className="Home-leftside">
        <h1 className="Home-h1">Calories Calculator</h1>
        <p className="Home-p">
            Calculate optimal macronutrient ratios for your body. Enter
            your age, height, weight, gender, and activity level.
        </p>
        </div>
        <div className="Home-rightside">
            <CalculatorForm/>
        </div>
        
    </div>
  );
}

export default HomePage;
