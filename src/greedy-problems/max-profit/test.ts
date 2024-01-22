import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('greedy-problems', () => {
    describe('maxProfit', () => {
        const matrix: [prices: number[], expected: number][] = [
            [[7,1,5,3,6,4], 5],
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