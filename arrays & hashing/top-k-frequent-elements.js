// Top K Frequent Elements
// Solved 
// Medium

// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Constraints:

// 1 <= nums.length <= 10^4.
// -1000 <= nums[i] <= 1000
// 1 <= k <= number of distinct elements in nums.

function topKFrequent(nums, k) {
  const freqMap = {};
  
  for (let num of nums) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  return Object.keys(freqMap)
    .sort((a, b) => freqMap[b] - freqMap[a])
    .slice(0, k)
    .map(Number);
}class Solution {
  topKFrequent(nums, k) {
    const freqMap = {};
    
    for (let num of nums) {
      freqMap[num] = (freqMap[num] || 0) + 1;
    }

    const buckets = Array(nums.length + 1).fill().map(() => []);

    for (let num in freqMap) {
      buckets[freqMap[num]].push(Number(num));
    }

    const result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
      for (let num of buckets[i]) {
        result.push(num);
        if (result.length === k) break;
      }
    }

    return result;
  }
}