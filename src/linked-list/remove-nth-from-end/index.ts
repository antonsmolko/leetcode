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

const removeNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
    let windowEnd = head
    let windowStart = head

    while (windowEnd && n > 0) {
        windowEnd = windowEnd.next
        n -= 1
    }

    if (windowEnd === null) { // @ts-ignore
        return windowStart.next
    }

    while (windowEnd.next !== null) {
        windowEnd = windowEnd.next
        // @ts-ignore
        windowStart = windowStart.next
    }

    // @ts-ignore
    windowStart.next = windowStart.next.next

    return head
}

export default removeNthFromEnd