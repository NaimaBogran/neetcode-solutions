// Merge Two Sorted Linked Lists
// Easy
// Topics
// Company Tags
// Hints
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

// The new list should be made up of nodes from list1 and list2.

// Example 1:



// Input: list1 = [1,2,4], list2 = [1,3,5]

// Output: [1,1,2,3,4,5]
// Example 2:

// Input: list1 = [], list2 = [1,2]

// Output: [1,2]
// Example 3:

// Input: list1 = [], list2 = []

// Output: []
// Constraints:

// 0 <= The length of the each list <= 100.
// -100 <= Node.val <= 100

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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {

        // Create a dummy node to simplify building the merged list
        let dummy = new ListNode();

        // Pointer that will build the new merged list
        let tail = dummy;

        // Traverse both lists while neither is empty
        while (list1 !== null && list2 !== null) {

            // Compare the values of the current nodes
            if (list1.val < list2.val) {
                // Attach list1 node to merged list
                tail.next = list1;

                // Move list1 forward
                list1 = list1.next;
            } else {
                // Attach list2 node to merged list
                tail.next = list2;

                // Move list2 forward
                list2 = list2.next;
            }

            // Move the tail forward
            tail = tail.next;
        }

        // If one list still has remaining nodes, attach it
        if (list1 !== null) {
            tail.next = list1;
        }

        if (list2 !== null) {
            tail.next = list2;
        }

        // The merged list starts at dummy.next
        return dummy.next;
    }
}