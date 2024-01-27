import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sort', () => {
    describe('maxChunksToSorted', () => {
        const matrix: [nums: number[], expected: number][] = [
            [[1,2,0,3], 2],
            [[4,3,2,1,0], 1],
            [[1,0,2,3,4], 4]
        ]

        test.each(matrix)(
            'should work',
            (nums, expected
            ): void => {
                expect(solution(nums)).toEqual(expected)
            })
    })
})