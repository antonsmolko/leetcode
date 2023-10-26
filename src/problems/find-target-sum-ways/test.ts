import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('findTargetSumWays', () => {
  const matrix: [nums: number[], target: number, output: number][] = [
    [[1, 1, 1, 1, 1], 3, 5],
    [[1], 1, 1]
  ]

  test.each(matrix)('should work with nums: %s, target: %s', (nums, target, expected): void => {
    expect(solution(nums, target)).toEqual(expected);
  })
});
