import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sliding window', () => {
    describe('getMinSwapsCount', () => {
        const matrix: [numbers: number[], expected: number][] = [
            [[0,0,0,1,0], 0],
            [[1,0,1,0,1], 1],
            [[1,0,1,0,1,0,0,1,1,0,1], 3]
        ]

        test.each(matrix)(
            'should work',
            (numbers, expected
            ): void => {
                expect(solution(numbers)).toEqual(expected)
            })
    })
})