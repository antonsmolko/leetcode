import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('maxUniqueSplit', () => {
  const matrix: [s: string, expected: number][] = [
    ['ababccc', 5],
    ['aba', 2],
    ['aa', 1],
    ['wwwzfvedwfvhsww', 11]
  ]

  test.each(matrix)('should work with s: %s', (s, expected): void => {
    expect(solution(s)).toEqual(expected);
  })
});
