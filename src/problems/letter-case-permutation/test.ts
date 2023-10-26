import {describe, expect, test} from '@jest/globals';
import solution from '.'

describe('letterCasePermutation', () => {
  const matrix: [s: string, string[]][] = [
    ['a1b2', ['a1b2', 'a1B2', 'A1b2', 'A1B2']],
    ['3z4', ['3z4', '3Z4']]
  ]

  test.each(matrix)('should work with "%s"', (s, expected): void => {
    expect(solution(s)).toEqual(expected);
  })
});
