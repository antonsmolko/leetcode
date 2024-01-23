import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sliding window', () => {
    describe('minSwaps2', () => {
        const matrix: [nums: number[], expected: number][] = [
            [[0,1,0,1,1,0,0], 1],
            [[0,1,1,1,0,0,1,1,0], 2],
            [[1,1,0,0,1], 0]
        ]

        test.each(matrix)(
            'should work',
            (nums, expected
            ): void => {
                expect(solution(nums)).toEqual(expected)
            })
    })
})