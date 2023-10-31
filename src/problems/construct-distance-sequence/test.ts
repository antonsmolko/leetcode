import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('constructDistancedSequence', () => {
  const matrix: [n: number, expected: number[]][] = [
    [3, [3,1,2,3,2]],
    [5, [5,3,1,4,3,5,2,4,2]]
  ]

  test.each(matrix)('should work with n: %s', (n, expected): void => {
    expect(solution(n)).toEqual(expected);
  })
});
