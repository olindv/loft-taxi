import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";

describe("Header", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Header />);
        // expect(getByTestId("header")).toBeInTheDocument();
    });
});
