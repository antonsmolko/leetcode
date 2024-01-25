import { describe, expect, test } from '@jest/globals';
import solution, { ListNode } from '.'
const createListNode = (val: unknown, next: ListNode | null = null): ListNode => ({ val, next })

const genNodeList = (size: number, reverse: boolean = false) => {
    let head = null

    for (let i = 1; i <= size; i += 1) {
        const val = reverse ? i : size - i + 1
        head = createListNode(val, head)
    }

    return head
}

describe('linked list', () => {
    describe('reverseList', () => {
        const matrix: [head: ListNode | null, expected: ListNode | null][] = [
            [genNodeList(5), genNodeList(5, true)],
            [genNodeList(2), genNodeList(2, true)]
        ]

        test.each(matrix)(
            'should work',
            (head, expected
            ): void => {
                expect(solution(head)).toEqual(expected);
            })
    })
})