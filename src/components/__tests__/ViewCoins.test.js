import { render, screen } from "@testing-library/react";
import ViewCoins from "../ViewCoins";

test("renders the component", () => {
  render(<ViewCoins />);
  const element = screen.getByTestId("container");
  expect(element).toBeInTheDocument();
});
