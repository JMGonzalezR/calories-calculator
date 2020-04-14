import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import CalculatorForm from "./CalculatorForm";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("test the bmr formula", () => {
  //This is US units
  const weight = 190; //lbs
  const height = 70; //inches
  const age = 26;
  const bmr = 66 + 6.3 * weight + 12.9 * height - 6.8 * age;
  expect(bmr).toBe(1989.2);
});

test("test the calories diarys to maintain with low activity level", () => {
    //This is US units
    const bmr = 1989.2;
    const activityLevel = 1.2; //low
    const dailyCalories = bmr * activityLevel;
    expect(parseInt(dailyCalories)).toBe(2387);
  });

  test("test the calories diarys to lose with low activity level", () => {
    //This is US units
    const bmr = 1989.2;
    const activityLevel = 1.2; //low
    const dailyCalories = bmr * activityLevel;
    const goalsSelected = -3500; //lose weight
    const dailyCaloriesGoals = ((parseInt(dailyCalories) *7) + goalsSelected) / 7;
    expect(dailyCaloriesGoals).toBe(1887);
  });

it("should render the CalculatorForm", () => {
  act(() => {
    render(<CalculatorForm />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"CalculatorForm\\">
      <h4 class=\\"CalculatorForm-h4\\">Body Paramerets</h4>
      <div class=\\"CalculatorForm-container\\"><label class=\\"ToggleButton active\\"><input class=\\"ToggleButton-input\\" name=\\"gender\\" type=\\"radio\\" value=\\"male\\" checked=\\"\\">Male</label><label class=\\"ToggleButton\\"><input class=\\"ToggleButton-input\\" name=\\"gender\\" type=\\"radio\\" value=\\"female\\">Female</label></div>
      <div class=\\"CalculatorForm-container\\"><input type=\\"number\\" class=\\"CalculatorForm-textinput\\" placeholder=\\"Age\\"><input type=\\"number\\" class=\\"CalculatorForm-textinput\\" placeholder=\\"Weight Lbs\\"><input type=\\"number\\" class=\\"CalculatorForm-textinput\\" placeholder=\\"Height In\\"></div>
      <h4 class=\\"CalculatorForm-h4\\">Activity Level</h4>
      <p class=\\"CalculatorForm-activityLevelText\\"></p>
      <div class=\\"CalculatorForm-container\\"><label class=\\"RadioButton\\"><input type=\\"radio\\" name=\\"activityLevel\\" value=\\"1.2\\" checked=\\"\\"><span class=\\"RadioButton-checkmark\\"></span>
          <div class=\\"RadioButton-label active\\">Low</div>
        </label>
        <hr><label class=\\"RadioButton\\" style=\\"margin-left: -7px;\\"><input type=\\"radio\\" name=\\"activityLevel\\" value=\\"1.375\\"><span class=\\"RadioButton-checkmark\\"></span>
          <div class=\\"RadioButton-label\\">Middle</div>
        </label>
        <hr style=\\"margin-left: -7px;\\"><label class=\\"RadioButton\\"><input type=\\"radio\\" name=\\"activityLevel\\" value=\\"1.55\\"><span class=\\"RadioButton-checkmark\\"></span>
          <div class=\\"RadioButton-label\\">High</div>
        </label>
        <hr><label class=\\"RadioButton\\" style=\\"margin-left: -17px;\\"><input type=\\"radio\\" name=\\"activityLevel\\" value=\\"1.725\\"><span class=\\"RadioButton-checkmark\\"></span>
          <div class=\\"RadioButton-label\\">Very High</div>
        </label></div>
      <h4 class=\\"CalculatorForm-h4\\">Goals</h4>
      <div class=\\"CalculatorForm-container\\"><label class=\\"ToggleButton active\\"><input class=\\"ToggleButton-input\\" name=\\"goals\\" type=\\"radio\\" value=\\"-3500\\" checked=\\"\\">Lose</label><label class=\\"ToggleButton\\"><input class=\\"ToggleButton-input\\" name=\\"goals\\" type=\\"radio\\" value=\\"-2000\\">Lose 10%</label><label class=\\"ToggleButton\\"><input class=\\"ToggleButton-input\\" name=\\"goals\\" type=\\"radio\\" value=\\"0\\">Maintain</label><label class=\\"ToggleButton\\"><input class=\\"ToggleButton-input\\" name=\\"goals\\" type=\\"radio\\" value=\\"3500\\">Gain</label></div>
      <div class=\\"CalculatorForm-container\\"><button class=\\"CalculatorForm-button\\">
          <div class=\\"CalculateButton-label\\">Calculate </div>
        </button></div>
    </div>"
  `);
});
