import { numbersContextStructure } from "../src/context/phoneContext";

const mockMobilePhone: numbersContextStructure = {
  usedNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  addNumbers: jest.fn(),
  deleteNumbers: jest.fn(),
  buttonInitialClass: "string",
  changeToCall: jest.fn(),
  beforeCall: "string",
  changeButtons: jest.fn(),
  hangBefore: "string",
};

export default mockMobilePhone;
