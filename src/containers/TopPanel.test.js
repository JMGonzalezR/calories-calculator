import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { BrowserRouter as Router } from "react-router-dom";

import TopPanel from "./TopPanel";

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

it("should render the top panel", () => {
  act(() => {
    render(
      <Router>
        <TopPanel />
      </Router>,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<header class=\\"TopPanel\\">
      <div class=\\"TopPanel-body\\">
        <h3 class=\\"TopPanel-h3\\">Calories Calculator</h3>
        <nav class=\\"TopPanel-nav\\"><a class=\\"TopPanel-link\\" href=\\"/\\">Story</a><a class=\\"TopPanel-link\\" href=\\"/\\">Products</a></nav>
      </div>
    </header>"
  `);
});
