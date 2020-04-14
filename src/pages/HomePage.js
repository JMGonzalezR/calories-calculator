import React,{useState} from 'react';
import './HomePage.css';
import CalculatorForm from '../components/CalculatorForm';



function HomePage() {

  const [hasResult, setHasResult] = useState(false);
  const [result, setResult] = useState(false);
  //TODO: add the macroNutrients suggested per day
  if(hasResult){
    return(<div className="Home">
      <div className="Home-rightside">
        <CalculatorForm setHasResult={setHasResult} setResult={setResult}/>
    </div>
    <div className="Home-leftside">
    <h4 className="Home-h4">Your Results</h4>
    <div>
      <h1 className="Home-result">
        {parseInt(result)} kcal
      </h1>
      <p className="Home-resultText">
        Suggested amount of calories <b>per day</b> to achieve the goal.
      </p>
    </div>
    </div>
    
    
</div>)
  }
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
            <CalculatorForm setHasResult={setHasResult} setResult={setResult}/>
        </div>
        
    </div>
  );
}

export default HomePage;
