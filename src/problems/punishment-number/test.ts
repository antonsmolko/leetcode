import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('punishmentNumber', () => {
  const matrix: [n: number, expected: number][] = [
    [10, 182],
    [37, 1478]
  ]

  test.each(matrix)('should work with n: %s', (n, expected): void => {
    expect(solution(n)).toEqual(expected);
  })
});
