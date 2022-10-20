import ActionsNumberToCall from "./ActionsNumberToCall";
import { render, screen } from "@testing-library/react";
import NumbersContext from "../../context/phoneContext";
import MockMobilePhone from "../../../mocks/mockMobilePhone";

describe("Given the component ActionsNumbertoCall", () => {
  describe("When the component is rendered with the number '981298127'", () => {
    test("Then it should show the number '981298127'", () => {
      render(
        <NumbersContext.Provider value={{ ...MockMobilePhone }}>
          <ActionsNumberToCall />
        </NumbersContext.Provider>
      );

      const display = screen.getByText("1234567890");

      expect(display).not.toBeNull();
    });
  });
});
