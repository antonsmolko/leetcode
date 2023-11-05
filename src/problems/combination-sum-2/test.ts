import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('combinationSum2', () => {
  const matrix: [candidates: number[], target: number, expected: number[][]][] = [
    [[10,1,2,7,6,1,5], 8, [
      [1,1,6],
      [1,2,5],
      [1,7],
      [2,6]
    ]],
    [[2,5,2,1,2], 5, [
      [1,2,2],
      [5]
    ]]
  ]

  test.each(matrix)('should work with nums: %s', (candidates, target, expected): void => {
    expect(solution(candidates, target)).toEqual(expected);
  })
});
