// Sort an Array
// Medium
// Topics
// Company Tags
// You are given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

// Example 1:

// Input: nums = [10,9,1,1,1,2,3,1]

// Output: [1,1,1,1,2,3,9,10]
// Example 2:

// Input: nums = [5,10,2,1,3]

// Output: [1,2,3,5,10]
// Constraints:

// 1 <= nums.length <= 50,000.
// -50,000 <= nums[i] <= 50,000

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {

        // QuickSort helper
        const quickSort = (left, right) => {
            if (left >= right) return;

            // Partition the array and get pivot index
            let pivotIndex = partition(left, right);

            // Recursively sort left and right parts
            quickSort(left, pivotIndex - 1);
            quickSort(pivotIndex + 1, right);
        };

        // Partition function
        const partition = (left, right) => {
            let pivot = nums[right]; // choose last element as pivot
            let i = left; // pointer for smaller elements

            for (let j = left; j < right; j++) {
                // If current element is smaller than pivot
                if (nums[j] < pivot) {
                    // Swap nums[i] and nums[j]
                    [nums[i], nums[j]] = [nums[j], nums[i]];
                    i++;
                }
            }

            // Place pivot in correct position
            [nums[i], nums[right]] = [nums[right], nums[i]];

            return i; // return pivot index
        };

        quickSort(0, nums.length - 1);
        return nums;
    }
}