import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('hash table', () => {
    describe('isAnagram', () => {
        const matrix: [s: string, t: string, expected: boolean][] = [
            ['anagram', 'nagaram', true],
            ['rat', 'car', false]
        ]

        test.each(matrix)(
            'should work',
            (s, t, expected
            ): void => {
                expect(solution(s, t)).toEqual(expected)
            })
    })
})