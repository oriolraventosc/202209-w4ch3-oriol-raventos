import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Given the component App", () => {
  describe("When the component is rendered", () => {
    test("Then it should show the components Info, ActionsNumberToCall, ActionsHangButton, ActionsCallButton", () => {
      const expectedPhoneButtons = 11;
      const expectedText = "Calling...";

      render(<App />);

      const info = screen.queryByText(expectedText);
      const numbers = screen.queryAllByRole("button");
      expect(numbers.length).toBe(expectedPhoneButtons);
      expect(info).toBeInTheDocument();
    });
  });
});
