import { describe, expect, test } from '@jest/globals';
import solution, { ListNode } from '.'
const createListNode = (val: number, next: ListNode | null = null): ListNode | null => ({ val, next })

const genNodeList = (arr: number[]) => {
    let head = null

    for (let i = 0; i < arr.length; i += 1) {
        const val = arr[arr.length - 1 - i]
        head = createListNode(val, head)
    }

    return head
}

describe('linked list', () => {
    describe('getIntersectionList', () => {
        const node1845 = createListNode(1, createListNode(8, createListNode(4, createListNode(5))))
        const node24 = createListNode(2, createListNode(4))
        const matrix: [headA: ListNode | null, headA: ListNode | null, expected: ListNode | null][] = [
            [
                createListNode(4, node1845),
                createListNode(5, createListNode(6, node1845)),
                node1845
            ],
            [
                createListNode(1, createListNode(9, createListNode(1, node24))),
                createListNode(3, node24),
                node24
            ],
            [
                createListNode(2, createListNode(6, createListNode(4))),
                createListNode(1, createListNode(5)),
                null
            ],
        ]

        test.each(matrix)(
            'should work',
            (headA, headB, expected
            ): void => {
                expect(solution(headA, headB)).toEqual(expected);
            })
    })
})