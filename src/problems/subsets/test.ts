import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('subsets', () => {
  const matrix: [nums: number[], expected: number[][]][] = [
    [[1,2,3], [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]],
    [[0], [[],[0]]]
  ]

  test.each(matrix)('should work', (nums, expected): void => {
    expect(solution(nums)).toEqual(expected);
  })
});
