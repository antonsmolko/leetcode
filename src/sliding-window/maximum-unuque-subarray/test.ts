import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sliding window', () => {
    describe('maximumUniqueSubarray', () => {
        const matrix: [nums: number[], expected: number][] = [
            [[4,2,4,5,6], 17],
            [[5,2,1,2,5,2,1,2,5], 8]
        ]

        test.each(matrix)(
            'should work',
            (nums, expected
            ): void => {
                expect(solution(nums)).toEqual(expected)
            })
    })
})