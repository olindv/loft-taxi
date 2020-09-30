import React from "react";
import App from "../App";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("../Registration", () => () => <div>Registration</div>);

describe("App", () => {
    it("renders correctly", () => {
        const mockStore = {
            getState: () => ({ isLoggedIn: true }),
            subscribe: () => {},
            dispatch: () => {},
        };
        const history = createMemoryHistory();
        const { getByTestId } = render(
            <Router history={history}>
                <Provider store={mockStore}>
                    <App />
                </Provider>
            </Router>
        );
        expect(getByTestId("app")).toBeInTheDocument();
        // expect(container.innerHTML).toMatch("app");
    });
});
