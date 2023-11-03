import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('countMaxOrSubsets', () => {
  const matrix: [nums: number[], expected: number][] = [
    [[3,1], 2],
    [[2,2,2], 7],
    [[3,2,1,5], 6]
  ]

  test.each(matrix)('should work with nums: %s', (nums, expected): void => {
    expect(solution(nums)).toEqual(expected);
  })
});
