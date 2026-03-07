// Container With Most Water
// Medium
// Topics
// Company Tags
// Hints
// You are given an integer array heights where heights[i] represents the height of the 
// i
// t
// h
// i 
// th
//   bar.

// You may choose any two bars to form a container. Return the maximum amount of water a container can store.

// Example 1:



// Input: height = [1,7,2,5,4,7,3,6]

// Output: 36
// Example 2:

// Input: height = [2,2,2]

// Output: 4
// Constraints:

// 2 <= height.length <= 1000
// 0 <= height[i] <= 1000

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        // Start two pointers at the ends of the array
        let left = 0
        let right = heights.length - 1

        // Track the maximum water area found
        let maxArea = 0

        // Continue until the two pointers meet
        while (left < right) {

            // The container height is limited by the shorter bar
            let height = Math.min(heights[left], heights[right])

            // Width is the distance between the two bars
            let width = right - left

            // Calculate current area
            let area = height * width

            // Update max area if this one is larger
            maxArea = Math.max(maxArea, area)

            // Move the pointer with the smaller height inward
            // because the smaller bar is limiting the water height
            if (heights[left] < heights[right]) {
                left++
            } else {
                right--
            }
        }

        // Return the largest area found
        return maxArea
    }
}