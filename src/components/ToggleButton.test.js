import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import ToggleButton from "./ToggleButton";

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

it("render toggle button child", () => {
  act(() => {
    render(
      <ToggleButton type="radio" name="gender" value="male">
        Male
      </ToggleButton>,
      container
    );
  });
  expect(container.textContent).toBe("Male");
});

it("changes active class name between components", () => {
  const genderChangeHandler = jest.fn();
  act(() => {
    render(
      <ToggleButton
        type="radio"
        name="gender"
        value="male"
        isSelected={true}
        onChange={genderChangeHandler}
      >
        Male
      </ToggleButton>,
      container
    );
  });
  expect(container.firstChild).toHaveClass("active");
});

it("should render two toggle buttons", () => {
  const genderChangeHandler = jest.fn();
  act(() => {
    render(
      <div>
        <ToggleButton
          type="radio"
          name="gender"
          value="male"
          isSelected={true}
          onChange={genderChangeHandler}
        >
          Male
        </ToggleButton>
        <ToggleButton
          type="radio"
          name="gender"
          value="female"
          isSelected={false}
          onChange={genderChangeHandler}
        >
          Female
        </ToggleButton>
      </div>,
      container
    );
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div><label class=\\"ToggleButton active\\"><input class=\\"ToggleButton-input\\" name=\\"gender\\" type=\\"radio\\" value=\\"male\\" checked=\\"\\">Male</label><label class=\\"ToggleButton\\"><input class=\\"ToggleButton-input\\" name=\\"gender\\" type=\\"radio\\" value=\\"female\\">Female</label></div>"`
  );
});
