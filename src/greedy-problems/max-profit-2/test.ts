import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('greedy-problems', () => {
    describe('maxProfit2', () => {
        const matrix: [prices: number[], expected: number][] = [
            [[7,1,5,3,6,4], 7],
            [[1,2,3,4,5], 4],
            [[7,6,4,3,1], 0]
        ]

        test.each(matrix)(
            'should work',
            (prices, expected
            ): void => {
                expect(solution(prices)).toEqual(expected)
            })
    })
})