// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice and array wll be sorted.

// You can return the answer in any order.

function twoSumSorted(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) {
      return [left, right];
    }

    if (nums[left] + nums[right] < target) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(twoSumSorted([2, 7, 11, 15], 13));
