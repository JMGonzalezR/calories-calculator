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
        <div class=\\"CalculatorForm\\"><button class=\\"CalculatorForm-button\\"> Male </button></div>
      </div>
    </div>"
  `);
});
