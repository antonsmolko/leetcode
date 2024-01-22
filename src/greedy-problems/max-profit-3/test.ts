import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('greedy-problems', () => {
    describe('maxProfit3', () => {
        const matrix: [prices: number[], fee: number, expected: number][] = [
            [[1,3,2,8,4,9], 2, 8],
            [[1,3,7,5,10,3], 3, 6]
        ]

        test.each(matrix)(
            'should work',
            (prices, fee, expected
            ): void => {
                expect(solution(prices, fee)).toEqual(expected)
            })
    })
})