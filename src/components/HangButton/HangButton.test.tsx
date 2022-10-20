import HangButton from "./HangButton";
import { render, screen } from "@testing-library/react";
import mockMobilePhone from "../../../mocks/mockMobilePhone";
import NumberContext from "../../context/phoneContext";

describe("Given an HangButton component", () => {
  describe("When it's rendered", () => {
    test("Then a button muest be shown with the text 'Hang'", () => {
      render(
        <NumberContext.Provider value={mockMobilePhone}>
          <HangButton />
        </NumberContext.Provider>
      );

      const callButton = screen.getByRole("link", { name: "Hang" });

      expect(callButton).toBeInTheDocument();
    });
  });
});
