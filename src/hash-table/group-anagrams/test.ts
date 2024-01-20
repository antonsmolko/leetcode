import { describe, expect, test } from '@jest/globals'
import solution from '.'

describe('hash table', () => {
    describe('groupAnagrams', () => {
        const matrix: [nums: string[], expected: string[][]][] = [
            [["eat","tea","tan","ate","nat","bat"], [["eat","tea","ate"],["tan","nat"],["bat"]]],
            [[""], [[""]]],
            [["a"], [["a"]]]
        ]

        test.each(matrix)(
            'should work',
            (nums, expected
            ): void => {
                expect(solution(nums)).toEqual(expected)
            })
    })
})