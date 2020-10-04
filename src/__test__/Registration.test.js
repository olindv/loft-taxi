import React from "react";
import Registration from "../Registration";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

describe("Registration", () => {
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
          <Registration />
        </Provider>
      </Router>
    );
    expect(getByTestId("registration")).toBeInTheDocument();
    expect(getByLabelText("Имя")).toHaveAttribute("name", "name");
    expect(getByLabelText("Фамилия")).toHaveAttribute("name", "surname");
    expect(getByLabelText("Адрес электронной почты")).toHaveAttribute(
      "name",
      "email"
    );
    expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
  });
});
