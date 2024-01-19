import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('hash table', () => {
    describe('singleNumber', () => {
        const matrix: [nums: number[], expected: number][] = [
            [[2,2,1], 1],
            [[4,1,2,1,2], 4],
            [[1], 1]
        ]

        test.each(matrix)(
            'should work',
            (nums, expected
            ): void => {
                expect(solution(nums)).toEqual(expected)
            })
    })
})