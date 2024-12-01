import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../src/components/Button";

test("renders button with correct text", () => {
  render(<Button text="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});
