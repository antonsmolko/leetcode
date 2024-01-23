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
    value: unknown;
    next: ListNode | null;
}

function reverseList(head: ListNode | null): ListNode | null {
    let reversed = null

    while (head !== null) {
        const next = head.next
        head.next = reversed
        reversed = head
        head = next
    }

    return reversed
}

export default reverseList