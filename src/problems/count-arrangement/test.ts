import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('countArrangement', () => {
  const matrix: [n: number, expected: number][] = [
    [2, 2],
    [1, 1],
    [3, 3]
  ]

  test.each(matrix)('should work with n: %s', (n, expected): void => {
    expect(solution(n)).toEqual(expected);
  })
});
