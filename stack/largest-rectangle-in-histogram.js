// Largest Rectangle In Histogram
// Hard
// Topics
// Company Tags
// Hints
// You are given an array of integers heights where heights[i] represents the height of a bar. The width of each bar is 1.

// Return the area of the largest rectangle that can be formed among the bars.

// Note: This chart is known as a histogram.

// Example 1:

// Input: heights = [7,1,7,2,2,4]

// Output: 8
// Example 2:

// Input: heights = [1,3,7]

// Output: 7
// Constraints:

// 1 <= heights.length <= 1000.
// 0 <= heights[i] <= 1000



class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        // Stack will store: [startIndex, height]
        const stack = [];

        // Track the maximum rectangle area
        let maxArea = 0;

        for (let i = 0; i < heights.length; i++) {

            // Start position of the current rectangle
            let start = i;

            // If current height is smaller than the stack top,
            // we calculate areas for rectangles that end here
            while (stack.length && stack[stack.length - 1][1] > heights[i]) {

                let [index, height] = stack.pop();

                // width = current position - starting index
                let width = i - index;

                maxArea = Math.max(maxArea, height * width);

                // Update start so the new bar can extend backwards
                start = index;
            }

            // Push the current bar with its start index
            stack.push([start, heights[i]]);
        }

        // Process any remaining bars in the stack
        for (const [index, height] of stack) {

            let width = heights.length - index;

            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }
}