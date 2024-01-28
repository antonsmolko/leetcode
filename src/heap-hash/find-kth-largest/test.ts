import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('heap/hash', () => {
    describe('findKthLargest', () => {
        const matrix: [nums: number[], k: number, expected: number][] = [
            [[3,2,1,5,6,4], 2, 5],
            [[3,2,3,1,2,4,5,5,6], 4, 4]
        ]

        test.each(matrix)(
            'should work',
            (nums, k, expected
            ): void => {
                expect(solution(nums, k)).toEqual(expected)
            })
    })
})