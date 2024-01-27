import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sort', () => {
    describe('findUnsortedSubarray', () => {
        const matrix: [nums: number[], expected: number][] = [
            [[2,6,4,8,10,9,15], 5],
            [[1,2,3,4], 0],
            [[1], 0],
            [[1,3,2,2,2], 4],
            [[2,3,3,2,4], 3]
        ]

        test.each(matrix)(
            'should work',
            (nums, expected
            ): void => {
                expect(solution(nums)).toEqual(expected)
            })
    })
})