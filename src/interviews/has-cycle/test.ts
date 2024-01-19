import { describe, expect, test } from '@jest/globals';
import solution from '.'

function ListNode(val) {
    this.val = val
    this.next = null
}

describe('hasCycle', () => {
    const matrix: [head: ListNode | null, expected: boolean][] = [
        [[1,2,4,7,11,19], [2,7,19,28,31], [2,7,19]],
        [[1,2,3], [2], [2]],
        [[2], [1,2,3], [2]],
        [[1,2,2,3], [2,2,2,2], [2,2]]
    ]

    test.each(matrix)(
        'should work',
        (list, expected
        ): void => {
            expect(solution(list)).toEqual(expected);
        })
});