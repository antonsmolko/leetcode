import { describe, expect, test } from '@jest/globals'
import solution from './repetition'

describe('canPartitionKSubsets', () => {
  const matrix: [nums: number[], k: number, expected: boolean][] = [
    [[4,3,2,3,5,2,1], 4, true],
    [[1,2,3,4], 3, false],
    [[4,4,6,2,3,8,10,2,10,7], 4, true],
    [[3522,181,521,515,304,123,2512,312,922,407,146,1932,4037,2646,3871,269], 5, true]
  ]

  test.each(matrix)('should work with nums: %s, k: %s', (nums, k, expected): void => {
    expect(solution(nums, k)).toEqual(expected)
  })
});
