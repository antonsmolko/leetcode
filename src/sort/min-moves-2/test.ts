import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sort', () => {
    describe('minMoves2', () => {
        const matrix: [nums: number[], expected: number][] = [
            [[1,2,3], 2],
            [[1,10,2,9], 16],
            [[1,1,2], 1],
            [[1,3,2], 2]
        ]

        test.each(matrix)(
            'should work',
            (nums, expected
            ): void => {
                expect(solution(nums)).toEqual(expected)
            })
    })
})