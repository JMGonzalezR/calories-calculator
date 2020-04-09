import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Footer";

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

it("should render the footer", () => {
  act(() => {
    render(
      <Router>
        <Footer />
      </Router>,
      container
    );
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<footer class=\\"Footer\\">
      <div class=\\"Footer-body\\">
        <nav class=\\"Footer-nav\\"><a class=\\"Footer-link\\" href=\\"/\\">Story</a><a class=\\"Footer-link\\" href=\\"/\\">Products</a></nav>
        <p class=\\"Footer-copyright\\">Copyright ©2020 Juan Gonzalez</p>
      </div>
      <p class=\\"Footer-p\\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend porttitor quam, quis venenatis lectus pretium eu. Praesent eget nunc ut orci dignissim porta. Phasellus consequat sed purus sit amet pretium.</p>
    </footer>"
  `);
});
