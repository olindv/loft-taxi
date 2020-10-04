import React from "react";
import Map from "../Map";
import { render } from "@testing-library/react";
import mapbox from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe("Map", () => {
  it("renders correctly", () => {
    window.URL.createObjectURL = jest.fn();

    const { getByTestId } = render(<Map />);
    expect(mapbox.Map).toHaveBeenCalledWith({
      container: getByTestId("Map"),
      style: "mapbox://styles/mapbox/light-v10",
      center: [37.1903229, 55.9889082],
      zoom: 13,
    });
  });
});
