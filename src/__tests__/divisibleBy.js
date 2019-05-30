import { divisibleBy } from "../divisibleBy";

it("divisibleBy false", () => {
  expect(divisibleBy(11, 5)).toEqual(false);
});

it("divisibleBy true", () => {
  expect(divisibleBy(15, 3)).toEqual(true);
});
