import { describe, expect, test } from '@jest/globals'
import solution from '.'
const getGuess = (pick: number) => (n: number): number => Math.sign(pick - n)
describe('binary search', () => {
    describe('guess-number', () => {
        const matrix: [n: number, pick: number, expected: number][] = [
            [10, 6, 6],
            [1, 1, 1],
            [2, 1, 1]
        ]

        test.each(matrix)(
            'should work',
            (n, pick, expected
            ): void => {
                global.guess = getGuess(pick)
                expect(solution(n)).toEqual(expected)
            })
    })
})