import { describe, expect, test } from '@jest/globals'
import solution, { ListNode } from '.'
const createListNode = (val: number = 0, next: ListNode | null = null): ListNode => ({ val, next })
const createList = (values: number[]): ListNode | null => {
    const head = createListNode()
    let tail = head

    for (let i = 0; i < values.length; i += 1) {
        tail.next = createListNode(values[i])
        tail = tail.next
    }

    return head.next
}

const getListValues = (head: ListNode | null): number[] => {
    const values: number[] = []

    while (head !== null) {
        values.push(head.val)
        head = head.next
    }

    return values
}
describe('linked list', () => {
    describe('partition', () => {
        const matrix: [values: number[], x: number, expected: number[]][] = [
            [[1,4,3,2,5,2], 3, [1,2,2,4,3,5]],
            [[2,1], 2, [1,2]]
        ]

        test.each(matrix)(
            'should work',
            (values, x, expected
            ): void => {
                expect(getListValues(solution(createList(values), x))).toEqual(expected);
            })
    })
})