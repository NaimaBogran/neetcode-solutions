// 3Sum
// Solved 
// Medium
// Topics
// Company Tags
// Hints
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

// The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]

// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].

// Example 2:

// Input: nums = [0,1,1]

// Output: []
// Explanation: The only possible triplet does not sum up to 0.

// Example 3:

// Input: nums = [0,0,0]

// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 1000
// -10^5 <= nums[i] <= 10^5

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        // Step 1: Sort the array so we can use the two-pointer technique
        nums.sort((a, b) => a - b);

        const result = [];

        // Step 2: Loop through the array, fixing one number at a time
        for (let i = 0; i < nums.length; i++) {

            // If the current number is greater than 0,
            // we can stop because 3 positive numbers can't sum to 0
            if (nums[i] > 0) break;

            // Skip duplicates for the first number
            // This prevents repeating the same triplet
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            // Step 3: Two pointers
            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {

                const sum = nums[i] + nums[left] + nums[right];

                // If we found a valid triplet
                if (sum === 0) {

                    result.push([nums[i], nums[left], nums[right]]);

                    // Move both pointers inward
                    left++;
                    right--;

                    // Skip duplicate numbers for the second value
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }

                    // Skip duplicate numbers for the third value
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }

                } 
                // If the sum is too small, move left pointer right
                else if (sum < 0) {
                    left++;
                } 
                // If the sum is too large, move right pointer left
                else {
                    right--;
                }
            }
        }

        return result;
    }
}