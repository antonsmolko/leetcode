import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('hash table', () => {
    describe('twoSum', () => {
        const matrix: [nums: number[], target: number, expected: number[]][] = [
            [[2,7,11,15], 9, [0,1]],
            [[3,2,4], 6, [1,2]],
            [[3,3], 6, [0,1]]
        ]

        test.each(matrix)(
            'should work',
            (nums, target, expected
            ): void => {
                expect(solution(nums, target)).toEqual(expected)
            })
    })
})