import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('permuteUnique', () => {
  const matrix: [nums: number[], expected: number[][]][] = [
    [[1,1,2], [[1,1,2], [1,2,1], [2,1,1]]],
    [[1,2,3], [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]],
    [[1], [[1]]]
  ]

  test.each(matrix)('should work with nums: %s', (nums, expected): void => {
    expect(solution(nums)).toEqual(expected);
  })
});
