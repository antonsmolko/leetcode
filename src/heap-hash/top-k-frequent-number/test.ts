import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('heap/hash', () => {
    describe('topKFrequentNumber', () => {
        const matrix: [nums: number[], k: number, expected: number[]][] = [
            [[1,1,1,2,2,3], 2, [1,2]],
            [[1], 1, [1]]
        ]

        test.each(matrix)(
            'should work',
            (nums, k, expected
            ): void => {
                expect(solution(nums, k)).toEqual(expected)
            })
    })
})