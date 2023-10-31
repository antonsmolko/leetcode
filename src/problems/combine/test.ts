import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('combine', () => {
  const matrix: [n: number, k: number, expected: number[][]][] = [
    [4, 2, [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]],
    [1, 1, [[1]]]
  ]

  test.each(matrix)('should work with n: %s, k: %s', (n, k, expected): void => {
    expect(solution(n, k)).toEqual(expected);
  })
});
