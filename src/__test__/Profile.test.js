import React from "react";
import Profile from "../Profile";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

describe("Profile", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ isLoggedIn: true }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory();
    const { getByTestId, getByLabelText } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <Profile />
        </Provider>
      </Router>
    );
    expect(getByTestId("profile")).toBeInTheDocument();
    expect(getByLabelText("Номер карты:")).toHaveAttribute(
      "name",
      "cardNumber"
    );
    expect(getByLabelText("Срок действия:")).toHaveAttribute(
      "name",
      "expiryDate"
    );
    expect(getByLabelText("CVC:")).toHaveAttribute("name", "cvcNumber");
    expect(getByLabelText("Имя владельца:")).toHaveAttribute(
      "name",
      "userName"
    );
  });
});
