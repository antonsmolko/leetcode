import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('monotonic-sequence', () => {
    describe('removeKDigits', () => {
        const matrix: [num: string, k: number, expected: string][] = [
            ['1432219', 3, '1219'],
            ['10200', 1, '200'],
            ['10', 2, '0'],
            ['112', 1, '11'],
            ['10', 1, '0']
        ]

        test.each(matrix)(
            'should work',
            (num, k, expected
            ): void => {
                expect(solution(num, k)).toEqual(expected)
            })
    })
})