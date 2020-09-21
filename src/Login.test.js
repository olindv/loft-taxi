import React from "react";
import Login from "./Login";
import { render } from "@testing-library/react";

describe("Login", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Login />);
        expect(getByTestId("login")).toBeTruthy();
    });

    it("render form fields correctly", () => {
        const { getByLabelText } = render(<Login />);

        expect(getByLabelText("Имя пользователя*")).toHaveAttribute(
            "name",
            "email"
        );
        expect(getByLabelText("Пароль*")).toHaveAttribute("name", "password");
    });
});
