import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

jest.mock("./Login", () => ({ Login: () => <div>Login component</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login component");
  });
});
