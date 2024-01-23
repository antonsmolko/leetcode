import { describe, expect, test } from '@jest/globals';
import solution, { ListNode } from '.'
const createListNode = (value: unknown, next: ListNode | null = null): ListNode => ({ value, next })

const genNodeList = (size: number, reverse: boolean = false) => {
    let head = null

    for (let i = 1; i <= size; i += 1) {
        const value = reverse ? i : size - i + 1
        head = createListNode(value, head)
    }

    return head
}

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
});