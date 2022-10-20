import Info from "./Info";
import { render, screen } from "@testing-library/react";

describe("Given a Info component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a span element with the text 'Calling...'", () => {
      const expectedText = "Calling...";

      render(<Info />);

      const info = screen.queryByText(expectedText);

      expect(info).toBeInTheDocument();
    });
  });
});
