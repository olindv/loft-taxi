import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

describe("App", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("App")).toBeInTheDocument();
    });
});
