import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('binary search', () => {
    describe('search', () => {
        const matrix: [nums: number[], target: number, expected: number][] = [
            [[-1,0,3,5,9,12], 9, 4],
            [[-1,0,3,5,9,12], 2, -1],
            [[5], 5, 0],
            [[-1,0,5], 2, -1]
        ]

        test.each(matrix)(
            'should work',
            (nums, target, expected
            ): void => {
                expect(solution(nums, target)).toEqual(expected)
            })
    })
})