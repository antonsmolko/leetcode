import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('findEqualElements', () => {
    const matrix: [arr1: number[], arr2: number[], expected: number[]][] = [
        [[1,2,4,7,11,19], [2,7,19,28,31], [2,7,19]],
        [[1,2,3], [2], [2]],
        [[2], [1,2,3], [2]],
        [[1,2,2,3], [2,2,2,2], [2,2]]
    ]

    test.each(matrix)(
        'should work',
        (arr1, arr2, expected
        ): void => {
            expect(solution(arr1, arr2)).toEqual(expected);
        })
});