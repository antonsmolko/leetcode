import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('binary search', () => {
    describe('search matrix', () => {
        const matrix: [matrix: number[][], target: number, expected: boolean][] = [
            [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3, true],
            [[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13, false],
            [[[1,3,5]], 1, true]
        ]

        test.each(matrix)(
            'should work',
            (matrix, target, expected
            ): void => {
                expect(solution(matrix, target)).toEqual(expected)
            })
    })
})