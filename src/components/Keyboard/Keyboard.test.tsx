import Keyboard from "./Keyboard";
import { render, screen } from "@testing-library/react";

describe("Given a Keyboard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a keyboard phone with 10 numbers and a delete button", () => {
      const expectedButtons = 11;

      render(<Keyboard />);

      const numbers = screen.queryAllByRole("button");

      expect(numbers.length).toBe(expectedButtons);
    });
  });
});
