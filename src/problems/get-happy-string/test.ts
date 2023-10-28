import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('permute', () => {
  const matrix: [n: number, k: number, expected: string][] = [
    [1, 3, 'c'],
    [1, 4, ''],
    [3, 9, 'cab'],
    [3, 6, 'bac']
  ]

  test.each(matrix)('should work with n: %s, k: %s', (n, k, expected): void => {
    expect(solution(n, k)).toEqual(expected);
  })
});
