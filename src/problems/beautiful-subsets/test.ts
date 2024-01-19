import { describe, expect, test } from '@jest/globals';
import solution from './repetition'

describe('beautifulSubsets', () => {
  const matrix: [nums: number[], k: number, expected: number][] = [
    [[2,4,6], 2, 4],
    [[1], 1, 1],
    [[4,2,5,9,10,3], 1, 23]
  ]

  test.each(matrix)('should work with nums: %s, k: %s', (nums, k, expected): void => {
    expect(solution(nums, k)).toEqual(expected);
  })
});
