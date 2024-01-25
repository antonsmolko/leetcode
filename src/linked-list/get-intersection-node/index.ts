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
    val: unknown;
    next: ListNode | null;
}

function getIntersectionList(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const getTailAndSize = (head: ListNode | null): { tail: ListNode | null, size: number } => {
        let size = 0
        let tail = head

        if (!tail) return { tail, size }
        size += 1

        while (tail.next) {
            tail = tail.next
            size += 1
        }

        return { tail, size }
    }

    const getNthNode = (head: ListNode | null, n: number): ListNode | null => {
        let localHead = head

        for (let i = 1; i <= n; i += 1) {
            if (localHead === null) return null
            localHead = localHead.next
        }

        return localHead
    }

    const { tail: tailA, size: sizeA } = getTailAndSize(headA)
    const { tail: tailB, size: sizeB } = getTailAndSize(headB)

    if (tailA !== tailB) return null

    const offset = Math.abs(sizeA - sizeB)
    const longer = sizeA > sizeB ? headA : headB

    let shorter = sizeA > sizeB ? headB : headA
    let trimLonger = getNthNode(longer, offset)

    while (shorter !== trimLonger) {
        // @ts-ignore
        shorter = shorter.next
        // @ts-ignore
        trimLonger = trimLonger.next
    }

    return shorter
}

export default getIntersectionList