import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('hash table', () => {
    describe('twoSum', () => {
        const matrix: [nums: number[], target: number, expected: number[][]][] = [
            [[1,0,-1,0,-2,2], 0, [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]],
            [[2,2,2,2,2], 8, [[2,2,2,2]]]
        ]

        test.each(matrix)(
            'should work',
            (nums, target, expected
            ): void => {
                expect(solution(nums, target)).toEqual(expected)
            })
    })
})