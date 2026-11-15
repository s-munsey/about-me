import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Intro from "./pages/Home/Intro";

test("renders the portfolio introduction and its project link", () => {
  render(
    <MemoryRouter>
      <Intro />
    </MemoryRouter>
  );
  expect(
    screen.getByRole("heading", { name: /shaun munsey/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: /explore my work/i })
  ).toHaveAttribute("href", "/#projects");
});
