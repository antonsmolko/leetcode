import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sliding window', () => {
    describe('minSwaps', () => {
        const matrix: [nums: number[], expected: number][] = [
            [[0,0,0,1,0], 0],
            [[1,0,1,0,1], 1],
            [[1,0,1,0,1,0,0,1,1,0,1], 3]
        ]

        test.each(matrix)(
            'should work',
            (nums, expected
            ): void => {
                expect(solution(nums)).toEqual(expected)
            })
    })
})