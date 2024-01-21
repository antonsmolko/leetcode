import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('sort', () => {
    describe('merge', () => {
        const matrix: [intervals: number[][], expected: number[][]][] = [
            [[[1,3],[2,6],[8,10],[15,18]], [[1,6],[8,10],[15,18]]],
            [[[1,4],[4,5]], [[1,5]]],
            [[[1,3]], [[1,3]]],
            [[[1,4],[0,2]], [[0,4]]]
        ]

        test.each(matrix)(
            'should work',
            (intervals, expected
            ): void => {
                expect(solution(intervals)).toEqual(expected)
            })
    })
})