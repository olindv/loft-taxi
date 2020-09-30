import React from "react";
import Login from "../Login";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

describe("Login", () => {
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
          <Login />
        </Provider>
      </Router>
    );
    expect(getByTestId("login")).toBeInTheDocument();
    expect(getByLabelText("Имя пользователя*")).toHaveAttribute(
      "name",
      "email"
    );
    expect(getByLabelText("Пароль*")).toHaveAttribute("name", "password");
  });
});
