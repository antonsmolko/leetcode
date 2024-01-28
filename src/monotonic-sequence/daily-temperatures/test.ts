import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('monotonic-sequence', () => {
    describe('dailyTemperatures', () => {
        const matrix: [temperatures: number[], expected: number[]][] = [
            [[73,74,75,71,69,72,76,73], [1,1,4,2,1,1,0,0]],
            [[30,40,50,60], [1,1,1,0]],
            [[30,60,90], [1,1,0]]
        ]

        test.each(matrix)(
            'should work',
            (temperatures, expected
            ): void => {
                expect(solution(temperatures)).toEqual(expected)
            })
    })
})