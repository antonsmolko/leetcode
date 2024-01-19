import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('binary search', () => {
    describe('searchInRotated', () => {
        const matrix: [nums: number[], target: number, expected: number][] = [
            [[4,5,6,7,0,1,2], 0, 4],
            [[4,5,6,7,0,1,2], 3, -1],
            [[1], 0, -1]
        ]

        test.each(matrix)(
            'should work',
            (nums, target, expected
            ): void => {
                expect(solution(nums, target)).toEqual(expected)
            })
    })
})