const assert = require("assert");
const TempTracker = require("../index");

console.info = () => {};

describe("TempTracker", () => {
  describe("Initialize values", () => {
    it("set count, sum, max and min", () => {
      const tracker = new TempTracker(5, 150, 35, 20);
      assert.strictEqual(tracker.getCount(), 5);
      assert.strictEqual(tracker.getMax(), 35);
      assert.strictEqual(tracker.getMin(), 20);
      assert.strictEqual(tracker.getSum(), 150);
    });

    it("count should be equal or greater than 0", () => {
      const tracker = new TempTracker(-5, 0);
      assert.strictEqual(tracker.getMax(), 0);
      assert.strictEqual(tracker.getMin(), 0);
      assert.strictEqual(tracker.getCount(), 0);
      assert.strictEqual(tracker.getSum(), 0);
    });
  });

  describe("Add inputs", () => {
    it("change count, sum, max and min", () => {
      const tracker = new TempTracker();
      tracker.input(10);
      tracker.input(30);
      tracker.input(20);
      assert.strictEqual(tracker.getCount(), 3);
      assert.strictEqual(tracker.getMax(), 30);
      assert.strictEqual(tracker.getMin(), 10);
      assert.strictEqual(tracker.getAvg(), 20);
      assert.strictEqual(tracker.getSum(), 60);
    });
  });
});
