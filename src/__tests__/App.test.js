import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import { click } from "@testing-library/user-event/dist/click";
import BookList from "../components/BookList";

describe("App testing", () => {
  it("Welcome", () => {
    render(<App />);

    const Alert = screen.getByRole("alert");

    expect(Alert).toBeInTheDocument();
  });

  it("Welcome h1", () => {
    render(<App />);

    const AlertH1 = screen.getByText(/benvenuti in epibooks!/i);

    expect(AlertH1).toBeInTheDocument();
  });

  it("Card", () => {
    render(<App />);

    const card = screen.getAllByTestId("Book-card");

    expect(card).toHaveLength(150);
  });

  it("InputArea", () => {
    render(<App />);

    const InputArea = screen.getByPlaceholderText("Cerca un libro");

    expect(InputArea).toBeInTheDocument();
  });
  //   it("BookSearch", () => {
  //     render(<App />);
  //   });

  //   it("BorderCard", () => {
  //     render(<App />);

  //     const Border = screen.getAllByTestId("Book-card");

  //     fireEvent.click(Border.length);
  //     // expect(Border).toBeTruthy();
  //     expect(Border).toHaveStyle();
  //   });
});
