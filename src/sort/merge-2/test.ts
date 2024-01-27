import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sort', () => {
    describe('merge2', () => {
        const matrix: [nums1: number[], m: number, nums2: number[], n: number, expected: number[]][] = [
            [[1,2,3,0,0,0], 3, [2,5,6], 3, [1,2,2,3,5,6]],
            [[1], 1, [], 0, [1]],
            [[0], 0, [1], 1, [1]]
        ]

        test.each(matrix)(
            'should work',
            (nums1, m, nums2, n, expected
            ): void => {
                solution(nums1, m, nums2, n)
                expect(nums1).toEqual(expected)
            })
    })
})