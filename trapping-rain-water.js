// Trapping Rain Water
// Hard
// Topics
// Company Tags
// Hints
// You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

// Return the maximum area of water that can be trapped between the bars.

// Example 1:



// Input: height = [0,2,0,3,1,0,1,3,2,1]

// Output: 9
// Constraints:

// 1 <= height.length <= 1000
// 0 <= height[i] <= 1000
class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        // Two pointers at both ends
        let left = 0
        let right = height.length - 1

        // Track the tallest bars seen so far
        let leftMax = 0
        let rightMax = 0

        // Total trapped water
        let water = 0

        while (left < right) {

            // If left bar is smaller, process left side
            if (height[left] < height[right]) {

                // Update max height on the left
                leftMax = Math.max(leftMax, height[left])

                // Water trapped is difference between max and current height
                water += leftMax - height[left]

                // Move left pointer
                left++

            } else {

                // Update max height on the right
                rightMax = Math.max(rightMax, height[right])

                // Water trapped
                water += rightMax - height[right]

                // Move right pointer
                right--
            }
        }

        return water
    }
}