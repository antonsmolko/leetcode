import { describe, expect, test } from '@jest/globals'
import solution, { ListNode } from '.'
const createListNode = (val: unknown, next: ListNode | null = null): ListNode | null => ({ val, next })

describe('linked list', () => {
    describe('isPalindrome', () => {
        const matrix: [head: ListNode | null, expected: boolean][] = [
            [
                createListNode(1, createListNode(2, createListNode(3, createListNode(2, createListNode(1))))),
                true
            ],
            [
                createListNode(1, createListNode(2)),
                false
            ]
        ]

        test.each(matrix)(
            'should work',
            (head, expected
            ): void => {
                expect(solution(head)).toEqual(expected);
            })
    })
})