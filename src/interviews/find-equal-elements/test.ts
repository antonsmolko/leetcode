import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('rle', () => {
    const matrix: [s: string, r: string][] = [
        ['AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB', 'A4B3C2XYZD4E3F3A6B28']
    ]

    test.each(matrix)(
        'should work with %s',
        (s, expected
        ): void => {
            expect(solution(s)).toEqual(expected);
        })
});