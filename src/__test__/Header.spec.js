import React from "react";
import Header from "../Header";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

describe("Header", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => {},
      subscribe: () => {},
      dispatch: () => {},
    };
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId("header")).toBeInTheDocument();
  });
});
