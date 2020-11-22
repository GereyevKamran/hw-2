const { assert } = require("chai");
const arrays = require("../array.js");

describe("arrays methods", () => {
  describe("minArr", () => {
    it("should return minimal element ", () => {
      const array = [3, 1, 4];
      const expected = 1;

      const actual = arrays.minArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return minimal element", () => {
      const array = [];
      const expected = undefined;

      const actual = arrays.minArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return minimal element", () => {
      const array = [1];
      const expected = 1;

      const actual = arrays.minArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return minimal element", () => {
      const array = "";
      const expected = "type array";

      const actual = arrays.minArr(array);

      assert.deepEqual(expected, actual);
    });
  });

  describe("maxArr", () => {
    it("should return maximal element", () => {
      const array = [3, 1, 4];
      const expected = 4;

      const actual = arrays.maxArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return maximal element", () => {
      const array = [];
      const expected = undefined;

      const actual = arrays.maxArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return maximal element", () => {
      const array = [1];
      const expected = 1;

      const actual = arrays.maxArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return maximal element", () => {
      const array = "";
      const expected = "type array";

      const actual = arrays.maxArr(array);

      assert.deepEqual(expected, actual);
    });
  });

  describe("minIndex", () => {
    it("should return minimal index", () => {
      const array = [3, 1, 4];
      const expected = 1;

      const actual = arrays.minIndex(array);

      assert.deepEqual(expected, actual);
    });

    it("should return minimal index", () => {
      const array = [];
      const expected = 0;

      const actual = arrays.minIndex(array);

      assert.deepEqual(expected, actual);
    });

    it("should return minimal index", () => {
      const array = [1];
      const expected = 0;

      const actual = arrays.minIndex(array);

      assert.deepEqual(expected, actual);
    });

    it("should return minimal index", () => {
      const array = "";
      const expected = "type array";

      const actual = arrays.minIndex(array);

      assert.deepEqual(expected, actual);
    });
  });

  describe("maxIndex", () => {
    it("should return maxsimal index", () => {
      const array = [3, 1, 4];
      const expected = 2;

      const actual = arrays.maxIndex(array);

      assert.deepEqual(expected, actual);
    });

    it("should return maxsimal index", () => {
      const array = [];
      const expected = 0;

      const actual = arrays.maxIndex(array);

      assert.deepEqual(expected, actual);
    });

    it("should return maxsimal index", () => {
      const array = [1];
      const expected = 0;

      const actual = arrays.maxIndex(array);

      assert.deepEqual(expected, actual);
    });

    it("should return maxsimal index", () => {
      const array = "";
      const expected = "type array";

      const actual = arrays.maxIndex(array);

      assert.deepEqual(expected, actual);
    });
  });

  describe("sumElements", () => {
    it("should return sum elements", () => {
      const array = [3, 1, 4, 6];
      const expected = 4;

      const actual = arrays.sumElements(array);

      assert.deepEqual(expected, actual);
    });

    it("should return sum elements", () => {
      const array = [];
      const expected = 0;

      const actual = arrays.sumElements(array);

      assert.deepEqual(expected, actual);
    });

    it("should return sum elements", () => {
      const array = [1];
      const expected = 0;

      const actual = arrays.sumElements(array);

      assert.deepEqual(expected, actual);
    });

    it("should return sum elements", () => {
      const array = "";
      const expected = "type array";

      const actual = arrays.sumElements(array);

      assert.deepEqual(expected, actual);
    });
  });

  describe("reversArr", () => {
    it("should return revers array", () => {
      const array = [3, 1, 4, 6];
      const expected = [6, 4, 1, 3];

      const actual = arrays.reversArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return revers array", () => {
      const array = [];
      const expected = [];

      const actual = arrays.reversArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return revers array", () => {
      const array = [1];
      const expected = [1];

      const actual = arrays.reversArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return revers array", () => {
      const array = "";
      const expected = "type array";

      const actual = arrays.reversArr(array);

      assert.deepEqual(expected, actual);
    });
  });

  describe("oddElements", () => {
    it("should return oddElements", () => {
      const array = [3, 1, 4, 6];
      const expected = 2;

      const actual = arrays.oddElements(array);

      assert.deepEqual(expected, actual);
    });

    it("should return oddElements", () => {
      const array = [];
      const expected = 0;

      const actual = arrays.oddElements(array);

      assert.deepEqual(expected, actual);
    });

    it("should return oddElements", () => {
      const array = [1];
      const expected = 1;

      const actual = arrays.oddElements(array);

      assert.deepEqual(expected, actual);
    });

    it("should return oddElements", () => {
      const array = "";
      const expected = "type array";

      const actual = arrays.oddElements(array);

      assert.deepEqual(expected, actual);
    });
  });

  describe("halfArr", () => {
    it("should return halfArr", () => {
      const array = [3, 1, 4, 6];
      const expected = [4, 6, 3, 1];

      const actual = arrays.halfArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return halfArr", () => {
      const array = [];
      const expected = [];

      const actual = arrays.halfArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return halfArr", () => {
      const array = [1, 3, 5, 7, 9, 11, 13, 15];
      const expected = [9, 11, 13, 15, 1, 3, 5, 7];

      const actual = arrays.halfArr(array);

      assert.deepEqual(expected, actual);
    });

    it("should return halfArr", () => {
      const array = "";
      const expected = "type array";

      const actual = arrays.halfArr(array);

      assert.deepEqual(expected, actual);
    });
  });

  describe("bubbleSort", () => {
    it("should return bubbleSort", () => {
      const array = [3, 1, 4, 6];
      const expected = [1, 3, 4, 6];

      const actual = arrays.bubbleSort(array);

      assert.deepEqual(expected, actual);
    });

    it("should return bubbleSort", () => {
      const array = [];
      const expected = [];

      const actual = arrays.bubbleSort(array);

      assert.deepEqual(expected, actual);
    });

    it("should return bubbleSort", () => {
      const array = [9, 11, 13, 15, 1, 3, 5, 7];
      const expected = [1, 3, 5, 7, 9, 11, 13, 15];

      const actual = arrays.bubbleSort(array);

      assert.deepEqual(expected, actual);
    });

    it("should return bubbleSort", () => {
      const array = "";
      const expected = "type array";

      const actual = arrays.bubbleSort(array);

      assert.deepEqual(expected, actual);
    });
  });
});
