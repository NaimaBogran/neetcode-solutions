// Best Time to Buy and Sell Stock

// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

// Example 1:

// Input: prices = [10,1,5,6,7,1]

// Output: 6
// Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

// Example 2:

// Input: prices = [10,8,7,5,2]

// Output: 0
// Explanation: No profitable transactions can be made, thus the max profit is 0.

// Constraints:

// 1 <= prices.length <= 100
// 0 <= prices[i] <= 100



// 🧠 Step 1: Understand The Rules

// You must buy before you sell.

// You can only do one transaction.

// If no profit is possible → return 0.

// So really the question is:

// What is the biggest difference (future price - earlier price)?

// 🧠 Step 2: Think Naively First

// Brute force idea:

// For every day:

// Try selling on every future day

// Keep track of best profit

// That would look like:

// for each day i
//    for each day j > i
//        profit = prices[j] - prices[i]

// That works.

// But that’s O(n²).

// We can do better.

// 🧠 Step 3: What Do We Actually Need?

// At any day:

// If today’s price is 7,
// What’s the best profit I could make selling today?

// Answer:
// 7 minus the cheapest price seen before today.

// So we don’t need to check all past days.

// We just need:

// The lowest price so far

// The maximum profit so far

// That’s it.

// 🔎 Walk Through Example
// prices = [10,1,5,6,7,1]

// Start:

// lowest = 10
// maxProfit = 0

// Day 1: price = 1
// lowest = min(10,1) → 1

// Day 2: price = 5
// profit = 5 - 1 = 4
// maxProfit = 4

// Day 3: price = 6
// profit = 6 - 1 = 5
// maxProfit = 5

// Day 4: price = 7
// profit = 7 - 1 = 6
// maxProfit = 6

// Day 5: price = 1
// lowest stays 1

// Final answer = 6

// 🧠 Why This Works

// Because:

// You only need the cheapest price BEFORE today.

// So as you move forward:

// Update minimum price

// Calculate profit using that minimum

// This is a single pass.

class Solution {
    maxProfit(prices) {
        let lowest = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            let currentPrice = prices[i];

            if (currentPrice < lowest) {
                lowest = currentPrice;
            } else {
                let profit = currentPrice - lowest;
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }
}