// Sort Colors
// Medium
// Topics
// Company Tags
// You are given an array nums consisting of n elements where each element is an integer representing a color:

// 0 represents red
// 1 represents white
// 2 represents blue
// Your task is to sort the array in-place such that elements of the same color are grouped together and arranged in the order: red (0), white (1), and then blue (2).

// You must not use any built-in sorting functions to solve this problem.

// Example 1:

// Input: nums = [1,0,1,2]

// Output: [0,1,1,2]
// Example 2:

// Input: nums = [2,1,0]

// Output: [0,1,2]
// Constraints:

// 1 <= nums.length <= 300.
// 0 <= nums[i] <= 2.
// Follow up: Could you come up with a one-pass algorithm using only constant extra space?


class Solution {
    /**
     * @param {number[]} nums
     * @return {void}
     */
    sortColors(nums) {

        let left = 0;              // next position for 0
        let right = nums.length - 1; // next position for 2
        let i = 0;

        while (i <= right) {

            if (nums[i] === 0) {
                // Swap with left
                [nums[i], nums[left]] = [nums[left], nums[i]];
                left++;
                i++;
            } 
            else if (nums[i] === 2) {
                // Swap with right
                [nums[i], nums[right]] = [nums[right], nums[i]];
                right--;
                // DO NOT increment i here
            } 
            else {
                // nums[i] === 1
                i++;
            }
        }
    }
}