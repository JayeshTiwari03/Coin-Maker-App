import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders coin home page", () => {
  render(<App />);
  const heading = screen.getByText(/Coin Maker/);
  expect(heading).toBeInTheDocument();
});
