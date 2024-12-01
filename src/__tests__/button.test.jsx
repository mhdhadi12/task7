import { render, screen } from "@testing-library/react";
import Button from "../components/button";

test("renders Button with dynamic text", () => {
  const buttonText = "Download CV";

  // Render komponen Button dengan properti text
  render(<Button text={buttonText} />);

  // Periksa apakah button dengan teks yang diberikan ada di dokumen
  const button = screen.getByText(buttonText);
  expect(button).toBeInTheDocument();
});

// test("button click triggers event", () => {
//   const handleClick = jest.fn(); // Mock fungsi untuk menangani klik

//   // Render komponen Button dengan properti text dan onClick
//   render(<Button text="Download CV" />);

//   // Simulasikan klik pada button
//   const button = screen.getByText(/download cv/i);
//   fireEvent.click(button);

//   // Periksa apakah fungsi handleClick dipanggil setelah klik
//   expect(handleClick).toHaveBeenCalledTimes(1);
// });
