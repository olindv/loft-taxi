import React from "react";
import Registration from "./Registration.js";
import { render } from "@testing-library/react";

describe("Registration", () => {
    it("renders correctly", () => {
        const { getByTestId } = render(<Registration />);
        expect(getByTestId("Registration")).toBeTruthy();
    });

    it("render form fields correctly", () => {
        const { getByLabelText } = render(<Registration />);

        expect(getByLabelText("Имя")).toHaveAttribute("name", "name");
        expect(getByLabelText("Фамилия")).toHaveAttribute("name", "secondName");
        expect(getByLabelText("Адрес электронной почты")).toHaveAttribute(
            "name",
            "email"
        );
        expect(getByLabelText("Пароль")).toHaveAttribute("name", "password");
    });
});
