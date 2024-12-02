import { render, screen } from "@testing-library/react";
import { Header } from "../components/header.tsx";

test("renders Header with navigation links", () => {
  render(<Header />);

  // Periksa apakah elemen navigasi Home ada di dokumen
  const homeLink = screen.getByText(/home/i);
  expect(homeLink).toBeInTheDocument();

  // Periksa apakah elemen navigasi Activity ada di dokumen
  const activityLink = screen.getByText(/activity/i);
  expect(activityLink).toBeInTheDocument();

  // Periksa apakah elemen navigasi Contact ada di dokumen
  const contactLink = screen.getByText(/contact/i);
  expect(contactLink).toBeInTheDocument();
});
