import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('letterCombinations', () => {
  const matrix: [digits: string, expected: string[]][] = [
    ['23', ['ad','ae','af','bd','be','bf','cd','ce','cf']],
    ['', []],
    ['2', ['a','b','c']]
  ]

  test.each(matrix)('should work with "%s"', (digits, expected): void => {
    expect(solution(digits)).toEqual(expected);
  })
});
