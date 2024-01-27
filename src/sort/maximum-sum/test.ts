import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sort', () => {
    describe('maximumSum', () => {
        const matrix: [nums: number[], expected: number][] = [
            [[18,43,36,13,7], 54],
            [[10,12,19,14], -1],
            [[1,9,1,3,10], 11]
        ]

        test.each(matrix)(
            'should work',
            (nums, expected
            ): void => {
                expect(solution(nums)).toEqual(expected)
            })
    })
})