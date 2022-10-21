import CalllButton from "./CallButton";
import { render, screen } from "@testing-library/react";
import mockMobilePhone from "../../../../mocks/mockMobilePhone";
import NumberContext from "../../../context/phoneContext";

describe("Given a CallButton component", () => {
  describe("When it's rendered", () => {
    test("Then a button must be shown with the text 'Call'", () => {
      render(
        <NumberContext.Provider value={mockMobilePhone}>
          <CalllButton />
        </NumberContext.Provider>
      );

      const callButton = screen.getByRole("link", { name: "Call" });

      expect(callButton).toBeInTheDocument();
    });
  });
});
