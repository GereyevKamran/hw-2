const { assert } = require("chai");
const ifelse = require("../ifelse.js");

describe("ifelse methods", () => {
  describe("bool", () => {
    it("Введите Число", () => {
      const arg = 3;
      const arg2 = 6;
      const expected = 9;

      const actual = ifelse.bool(arg, arg2);

      assert.deepEqual(expected, actual);
    });
  });
});
