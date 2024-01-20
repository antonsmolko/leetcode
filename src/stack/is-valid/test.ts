import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('hash table', () => {
    describe('twoSum', () => {
        const matrix: [s: string, expected: boolean][] = [
            ['()', true],
            ['()[]{}', true],
            ['[', false]
        ]

        test.each(matrix)(
            'should work',
            (s, expected
            ): void => {
                expect(solution(s)).toEqual(expected)
            })
    })
})