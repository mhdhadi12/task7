import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "../components/footer";

test("renders footer with social media links and credits", () => {
  render(<Footer />);

  // Periksa tautan media sosial
  const facebookLink = screen.getByRole("link", { name: /facebook/i });
  const instagramLink = screen.getByRole("link", { name: /instagram/i });
  const twitterLink = screen.getByRole("link", { name: /twitter/i });
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

  expect(facebookLink).toBeInTheDocument();
  expect(instagramLink).toBeInTheDocument();
  expect(twitterLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();

  // Periksa teks "Built with ❤️ by Hadi"
  const creditsText = screen.getByText(/built with/i);
  expect(creditsText).toBeInTheDocument();

  // Periksa ikon hati (SVG)
  const heartIcon = screen.getByRole("img", { hidden: true }); // Ikon SVG biasanya tersembunyi
  expect(heartIcon).toBeInTheDocument();
  expect(heartIcon).toHaveAttribute("fill", "currentColor");
});
