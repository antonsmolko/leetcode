import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('subsetsWithDup', () => {
  const matrix: [nums: number[], expected: number[][]][] = [
    [[1,2,2], [[],[1],[1,2],[1,2,2],[2],[2,2]]],
    [[0], [[],[0]]]
  ]

  test.each(matrix)('should work with nums: %s', (nums, expected): void => {
    expect(solution(nums)).toEqual(expected);
  })
});
