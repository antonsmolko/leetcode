import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('numsSameConsecDiff', () => {
  const matrix: [n: number, k: number, number[]][] = [
    [3, 7, [181,292,707,818,929]],
    [2, 1, [12,10,23,21,34,32,45,43,56,54,67,65,78,76,89,87,98]]
  ]

  test.each(matrix)('should work with n = %s, k = %s', (n, k, expected): void => {
    expect(solution(n, k)).toEqual(expected);
  })
});
