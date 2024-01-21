import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('heap/hash', () => {
    describe('topKFrequent', () => {
        const matrix: [words: string[], k: number, expected: string[]][] = [
            [["i","love","leetcode","i","love","coding"], 2, ["i","love"]],
            [["the","day","is","sunny","the","the","the","sunny","is","is"], 4, ["the","is","sunny","day"]]
        ]

        test.each(matrix)(
            'should work',
            (words, k, expected
            ): void => {
                expect(solution(words, k)).toEqual(expected)
            })
    })
})