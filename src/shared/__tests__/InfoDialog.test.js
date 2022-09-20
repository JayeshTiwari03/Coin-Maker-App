import { render, screen } from "@testing-library/react";
import InfoDialog from "../InfoDialog";
import { mockCoinData } from "../__fixtures__/mockData";

test("renders Cards", () => {
  render(<InfoDialog coinData={mockCoinData} />);
  const element = screen.getByTestId("main-container");
  expect(element).toBeInTheDocument();
});
