/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export type ListNode = {
    val: number;
    next: ListNode | null;
}

function isPalindrome(head: ListNode | null): boolean {
    let fast = head
    let slow = head
    const stack: number[] = []

    while(fast !== null && fast.next !== null) {
        stack.push(slow.val)
        fast = fast.next.next
        slow = slow.next
    }

    if (fast !== null) {
        slow = slow.next
    }

    while(slow !== null) {
        if (slow.val !== stack.pop()) return false
        slow = slow.next
    }

    return true
}

export default isPalindrome