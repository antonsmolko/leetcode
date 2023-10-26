import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('permute', () => {
  const matrix: [nums: number[], expected: number[][]][] = [
    [[1,2,3], [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]],
    [[0,1], [[0,1],[1,0]]],
    [[1], [[1]]]
  ]

  test.each(matrix)('should work with nums: %s', (nums, expected): void => {
    expect(solution(nums)).toEqual(expected);
  })
});
