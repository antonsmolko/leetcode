import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('greedy-problems', () => {
    describe('maxProfit4', () => {
        const matrix: [prices: number[], expected: number][] = [
            [[1,2,3,0,2], 3],
            [[1], 0]
        ]

        test.each(matrix)(
            'should work',
            (prices, expected
            ): void => {
                expect(solution(prices)).toEqual(expected)
            })
    })
})