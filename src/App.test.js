import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import App from "./App";

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

it("should render the App", () => {
  act(() => {
    render(<App />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"App\\">
      <header class=\\"TopPanel\\">
        <div class=\\"TopPanel-body\\">
          <h3 class=\\"TopPanel-h3\\">Calories Calculator</h3>
          <nav class=\\"TopPanel-nav\\"><a class=\\"TopPanel-link\\" href=\\"/\\">Story</a><a class=\\"TopPanel-link\\" href=\\"/\\">Products</a></nav>
        </div>
      </header>
      <main class=\\"App-main\\">
        <div class=\\"Home\\">
          <div class=\\"Home-leftside\\">
            <h1 class=\\"Home-h1\\">Calories Calculator</h1>
            <p class=\\"Home-p\\">Calculate optimal macronutrient ratios for your body. Enter your age, height, weight, gender, and activity level.</p>
          </div>
          <div class=\\"Home-rightside\\">
            <div class=\\"CalculatorForm\\">
              <h4 class=\\"CalculatorForm-h4\\">Body Paramerets</h4>
              <div class=\\"CalculatorForm-container\\"><label class=\\"ToggleButton active\\"><input class=\\"ToggleButton-input\\" name=\\"gender\\" type=\\"radio\\" value=\\"male\\" checked=\\"\\">Male</label><label class=\\"ToggleButton\\"><input class=\\"ToggleButton-input\\" name=\\"gender\\" type=\\"radio\\" value=\\"female\\">Female</label></div>
              <div class=\\"CalculatorForm-container\\"><input type=\\"text\\" class=\\"CalculatorForm-textinput\\" placeholder=\\"Age\\"><input type=\\"text\\" class=\\"CalculatorForm-textinput\\" placeholder=\\"Weight\\"><input type=\\"text\\" class=\\"CalculatorForm-textinput\\" placeholder=\\"Height\\"></div>
              <h4 class=\\"CalculatorForm-h4\\">Activity Level</h4>
              <p class=\\"CalculatorForm-activityLevelText\\">Low: Sendantary type of activity, it's everyday activity that includes walking, driving a car, working, eating, etc.</p>
              <div class=\\"CalculatorForm-container\\"><label class=\\"RadioButton\\"><input type=\\"radio\\" name=\\"activityLevel\\" value=\\"low\\" checked=\\"\\"><span class=\\"RadioButton-checkmark\\"></span>
                  <div class=\\"RadioButton-label active\\">Low</div>
                </label>
                <hr><label class=\\"RadioButton\\" style=\\"margin-left: -7px;\\"><input type=\\"radio\\" name=\\"activityLevel\\" value=\\"middle\\"><span class=\\"RadioButton-checkmark\\"></span>
                  <div class=\\"RadioButton-label\\">Middle</div>
                </label>
                <hr style=\\"margin-left: -7px;\\"><label class=\\"RadioButton\\"><input type=\\"radio\\" name=\\"activityLevel\\" value=\\"high\\"><span class=\\"RadioButton-checkmark\\"></span>
                  <div class=\\"RadioButton-label\\">High</div>
                </label>
                <hr><label class=\\"RadioButton\\" style=\\"margin-left: -17px;\\"><input type=\\"radio\\" name=\\"activityLevel\\" value=\\"veryhigh\\"><span class=\\"RadioButton-checkmark\\"></span>
                  <div class=\\"RadioButton-label\\">Very High</div>
                </label></div>
              <h4 class=\\"CalculatorForm-h4\\">Goals</h4>
              <div class=\\"CalculatorForm-container\\"><label class=\\"ToggleButton active\\"><input class=\\"ToggleButton-input\\" name=\\"goals\\" type=\\"radio\\" value=\\"lose\\" checked=\\"\\">Lose</label><label class=\\"ToggleButton\\"><input class=\\"ToggleButton-input\\" name=\\"goals\\" type=\\"radio\\" value=\\"lose10%\\">Lose 10%</label><label class=\\"ToggleButton\\"><input class=\\"ToggleButton-input\\" name=\\"goals\\" type=\\"radio\\" value=\\"maintain\\">Maintain</label><label class=\\"ToggleButton\\"><input class=\\"ToggleButton-input\\" name=\\"goals\\" type=\\"radio\\" value=\\"gain\\">Gain</label></div>
              <div class=\\"CalculatorForm-container\\"><button class=\\"CalculatorForm-button\\">
                  <div class=\\"CalculateButton-label\\">Calculate </div>
                </button></div>
            </div>
          </div>
        </div>
      </main>
      <footer class=\\"Footer\\">
        <div class=\\"Footer-body\\">
          <nav class=\\"Footer-nav\\"><a class=\\"Footer-link\\" href=\\"/\\">Story</a><a class=\\"Footer-link\\" href=\\"/\\">Products</a></nav>
          <p class=\\"Footer-copyright\\">Copyright ©2020 Juan Gonzalez</p>
        </div>
        <p class=\\"Footer-p\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend porttitor quam, quis venenatis lectus pretium eu. Praesent eget nunc ut orci dignissim porta. Phasellus consequat sed purus sit amet pretium.</p>
      </footer>
    </div>"
  `);
});
