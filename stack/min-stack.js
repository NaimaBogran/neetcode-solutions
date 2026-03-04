// Min Stack
// Medium
// Topics
// Company Tags
// Hints
// Design a stack class that supports the push, pop, top, and getMin operations.

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// Each function should run in 
// O
// (
// 1
// )
// O(1) time.

// Example 1:

// Input: ["MinStack", "push", 1, "push", 2, "push", 0, "getMin", "pop", "top", "getMin"]

// Output: [null,null,null,null,0,null,2,1]

// Explanation:
// MinStack minStack = new MinStack();
// minStack.push(1);
// minStack.push(2);
// minStack.push(0);
// minStack.getMin(); // return 0
// minStack.pop();
// minStack.top();    // return 2
// minStack.getMin(); // return 1
// Constraints:

// -2^31 <= val <= 2^31 - 1.
// pop, top and getMin will always be called on non-empty stacks.

class MinStack {
    constructor() {
        // Main stack stores actual values
        this.stack = [];
        
        // Min stack stores the minimum value at each level
        this.minStack = [];
    }

    push(val) {
        // Push value into main stack
        this.stack.push(val);

        // If minStack is empty, val is the minimum
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            // Compare new value with current minimum
            let currentMin = this.minStack[this.minStack.length - 1];
            
            // Store the smaller one
            this.minStack.push(Math.min(val, currentMin));
        }
    }

    pop() {
        // Remove from BOTH stacks
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        // Return top of main stack
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        // Return top of min stack (current minimum)
        return this.minStack[this.minStack.length - 1];
    }
}