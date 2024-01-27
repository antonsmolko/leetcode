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

export class ListNode {
    val: number
    next: ListNode | null

    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val
        this.next = next
    }
}

const partition = (head: ListNode | null, x: number): ListNode | null => {
    let smallHead = new ListNode()
    let largeHead = new ListNode()
    let smallTail = smallHead
    let largeTail = largeHead

    while (head !== null) {
        if (head.val < x) {
            smallTail.next = head
            smallTail = smallTail.next
        } else {
            largeTail.next = head
            largeTail = largeTail.next
        }

        head = head.next
    }

    smallTail.next = largeHead.next
    largeTail.next = null

    return smallHead.next
}

export default partition