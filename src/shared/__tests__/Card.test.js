import { render, screen } from "@testing-library/react";
import Cards from "../Cards";

test("renders Cards", () => {
  render(<Cards name="Bitcoin" />);
  const element = screen.getByTestId("main-container");
  expect(element).toBeInTheDocument();
});
