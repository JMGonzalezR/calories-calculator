import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import HomePage from "./HomePage";

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

it("should render the HomePage", () => {
  act(() => {
    render(<HomePage />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"Home\\">
      <div class=\\"Home-leftside\\">
        <h1 class=\\"Home-h1\\">Calories Calculator</h1>
        <p class=\\"Home-p\\">Calculate optimal macronutrient ratios for your body. Enter your age, height, weight, gender, and activity level.</p>
      </div>
      <div class=\\"Home-rightside\\">
        <div class=\\"CalculatorForm\\">
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
        </div>
      </div>
    </div>"
  `);
});
