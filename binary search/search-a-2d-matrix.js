// Search a 2D Matrix
// Medium
// Topics
// Company Tags
// Hints
// You are given an m x n 2-D integer array matrix and an integer target.

// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.
// Return true if target exists within matrix or false otherwise.

// Can you write a solution that runs in O(log(m * n)) time?

// Example 1:



// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

// Output: true
// Example 2:



// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15

// Output: false
// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -10000 <= matrix[i][j], target <= 10000

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {

        let m = matrix.length;
        let n = matrix[0].length;

        // Treat the matrix like a 1D sorted array
        let left = 0;
        let right = m * n - 1;

        while (left <= right) {

            let mid = Math.floor((left + right) / 2);

            // Convert 1D index to 2D coordinates
            let row = Math.floor(mid / n);
            let col = mid % n;

            let value = matrix[row][col];

            if (value === target) {
                return true;
            } else if (value < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }
}