// Evaluate Reverse Polish Notation
// Medium
// Topics
// Company Tags
// Hints
// You are given an array of strings tokens that represents a valid arithmetic expression in Reverse Polish Notation.

// Return the integer that represents the evaluation of the expression.

// The operands may be integers or the results of other operations.
// The operators include '+', '-', '*', and '/'.
// Assume that division between integers always truncates toward zero.
// Example 1:

// Input: tokens = ["1","2","+","3","*","4","-"]

// Output: 5

// Explanation: ((1 + 2) * 3) - 4 = 5
// Constraints:

// 1 <= tokens.length <= 1000.
// tokens[i] is "+", "-", "*", or "/", or a string representing an integer in the range [-100, 100].
class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        // Stack to store numbers as we process the expression
        const stack = [];

        // Loop through each token in the input array
        for (let token of tokens) {

            // If the token is an operator, perform the operation
            if (token === "+" || token === "-" || token === "*" || token === "/") {

                // Pop the last two numbers from the stack
                // Important: second popped number is the RIGHT operand
                const b = stack.pop();
                const a = stack.pop();

                let result;

                // Perform the correct operation
                if (token === "+") {
                    result = a + b;
                } else if (token === "-") {
                    result = a - b;
                } else if (token === "*") {
                    result = a * b;
                } else {
                    // Division must truncate toward zero
                    result = Math.trunc(a / b);
                }

                // Push the result back onto the stack
                stack.push(result);

            } else {
                // If the token is a number, convert it to a number and push to stack
                stack.push(Number(token));
            }
        }

        // The final result will be the only value left in the stack
        return stack.pop();
    }
}
