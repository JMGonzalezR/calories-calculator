import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import RadioButton from "./RadioButton";

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

it("render checkbox label text", () => {
  act(() => {
    render(<RadioButton label="Low" name="activityLevel" />, container);
  });
  expect(container.textContent).toBe("Low");
});

it("render without label props", () => {
  act(() => {
    render(<RadioButton name="activityLevel" />, container);
  });
  expect(container.textContent).toBe("");
});

it("should render two Radio Buttons", () => {
  act(() => {
    render(
      <div>
        <RadioButton label="Select" name="activityLevel" />
        <RadioButton label="Select" name="activityLevel" />
      </div>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div><label class=\\"RadioButton\\"><input type=\\"radio\\" name=\\"activityLevel\\"><span class=\\"RadioButton-checkmark\\"></span>
        <div class=\\"RadioButton-label\\">Select</div>
      </label><label class=\\"RadioButton\\"><input type=\\"radio\\" name=\\"activityLevel\\"><span class=\\"RadioButton-checkmark\\"></span>
        <div class=\\"RadioButton-label\\">Select</div>
      </label></div>"
  `);
});
