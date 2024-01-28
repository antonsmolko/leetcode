import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('monotonic-sequence', () => {
    describe('longestSubarray', () => {
        const matrix: [nums: number[], limit: number, expected: number][] = [
            [[8,2,4,7], 4, 2],
            [[10,1,2,4,7,2], 5, 4],
            [[4,2,2,2,4,4,2,2], 0, 3]
        ]

        test.each(matrix)(
            'should work',
            (nums, limit, expected
            ): void => {
                expect(solution(nums, limit)).toEqual(expected)
            })
    })
})