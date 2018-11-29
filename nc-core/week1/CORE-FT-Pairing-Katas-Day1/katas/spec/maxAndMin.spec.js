const { max, min } = require("../maxAndMin");
const { expect } = require("chai");

describe("max", () => {
  it("describe what happens if this test succeeds here", () => {
    expect(max([])).to.equal(0);
    expect(max([9])).to.equal(9);
    expect(max([5, 6])).to.equal(6);
    expect(max([-1, 3, 100, 56, 89, 0, 78])).to.equal(100);
  });
});

describe("min", () => {
  it("describe what happens if this test succeeds here", () => {
    expect(min([])).to.equal(0);
    expect(min([5])).to.equal(5);
    expect(min([1, 4, 34, 2, 7890, 5, 6])).to.equal(1);
  });
});
