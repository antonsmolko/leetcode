import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('two-pointers', () => {
    describe('partitionLabels', () => {
        const matrix: [s: string, expected: number[]][] = [
            ['ababcbacadefegdehijhklij', [9,7,8]],
            ['eccbbbbdec', [10]]
        ]

        test.each(matrix)(
            'should work',
            (s, expected
            ): void => {
                expect(solution(s)).toEqual(expected)
            })
    })
})