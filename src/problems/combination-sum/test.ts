import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('combinationSum', () => {
  const matrix: [candidates: number[], target: number, expected: number[][]][] = [
    [[2,3,6,7], 7, [[2,2,3],[7]]],
    [[2,3,5], 8, [[2,2,2,2],[2,3,3],[3,5]]],
    [[2], 1, []]
  ]

  test.each(matrix)('should work', (candidates, target, expected): void => {
    expect(solution(candidates, target)).toEqual(expected);
  })
});
