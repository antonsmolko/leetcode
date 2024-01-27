import { describe, expect, test } from '@jest/globals'
import solution, { ListNode } from '.'
const createListNode = (val: number, next: ListNode | null = null): ListNode | null => ({ val, next })
const removeNthNode = (head: ListNode | null, n: number): ListNode | null => {
    let localHead = head

    while (head && head.next && n - 1 > 0) {
        localHead = head.next
        n -= 1
    }

    if (!localHead || !localHead.next) return head

    localHead = localHead.next.next

    return head
}

describe('linked list', () => {
    describe('removeNthFromEnd', () => {
        const list12345 = createListNode(1, createListNode(2, createListNode(3, createListNode(4, createListNode(5)))))
        const list1235= removeNthNode(list12345, 4)
        const list1 = createListNode(1)

        const matrix: [head: ListNode | null, n: number, expected: ListNode | null][] = [
            [list12345, 4, list1235],
            [list1, 1, null]
        ]

        test.each(matrix)(
            'should work',
            (head, n, expected
            ): void => {
                expect(solution(head, n)).toEqual(expected);
            })
    })
})