import React from "react";
import Header from "./Header";
import { render } from "@testing-library/react";
import { AuthContext } from "./App";

describe("Header", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <AuthContext.Provider
        value={{ login: () => {}, logout: () => {}, isLoggedIn: false }}
      >
        <Header pageName="map" />
      </AuthContext.Provider>
    );
    expect(getByTestId("header")).toBeInTheDocument();
  });
});
