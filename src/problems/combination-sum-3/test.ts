import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('combine', () => {
  const matrix: [n: number, k: number, expected: number[][]][] = [
    [3, 7, [[1,2,4]]],
    [3, 9, [[1,2,6],[1,3,5],[2,3,4]]],
    [4, 1, []]
  ]

  test.each(matrix)('should work with n: %s, k: %s', (n, k, expected): void => {
    expect(solution(n, k)).toEqual(expected);
  })
});
