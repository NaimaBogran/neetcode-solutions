// Reverse Linked List
// Easy
// Topics
// Company Tags
// Hints
// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:

// Input: head = [0,1,2,3]

// Output: [3,2,1,0]
// Example 2:

// Input: head = []

// Output: []
// Constraints:

// 0 <= The length of the list <= 1000.
// -1000 <= Node.val <= 1000

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {

        // 'prev' will eventually become the new head of the reversed list
        let prev = null;

        // 'curr' starts at the head of the list
        let curr = head;

        // Traverse the linked list
        while (curr !== null) {

            // Save the next node before we change the pointer
            let next = curr.next;

            // Reverse the pointer so the current node points backward
            curr.next = prev;

            // Move prev forward
            prev = curr;

            // Move curr forward
            curr = next;
        }

        // At the end, 'prev' is the new head of the reversed list
        return prev;
    }
}