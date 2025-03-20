import { it } from "@std/testing/bdd";
import { expect } from "@std/expect";
import { add } from "./maths.ts";

it("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
