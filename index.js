"use strict";

// Main class
class TempTracker {
  constructor(count = 0, sum = 0, max = 0, min = Number.POSITIVE_INFINITY) {
    if (count > 0) {
      this.count = Math.max(count, 0); // Number of inputs so far
      this.sum = sum; // Total sum of inputs
      this.max = max; // Max input so far
      this.min = min; // Min input so far
    } else {
      this.count = 0;
      this.sum = 0;
      this.max = 0;
      this.min = Number.POSITIVE_INFINITY;
    }
  }

  // Add an input
  input = (value) => {
    if (value) {
      this.count++;
      this.sum += value;
    }

    if (value > this.max) {
      this.max = value;
    }

    if (value < this.min) {
      this.min = value;
    }
  };

  // Get highest temperature
  getMax = () => this.max;

  // Get lowest temperatur
  getMin = () => (this.count > 0 ? this.min : 0);

  // Get average temperature
  getAvg = () => (this.count > 0 ? this.sum / this.count : 0);

  // Get total sum
  getSum = () => this.sum;

  // Get count of inputs
  getCount = () => this.count;
}

module.exports = TempTracker;
