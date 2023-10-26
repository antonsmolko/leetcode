import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('closestCost', () => {
  const matrix: [baseCosts: number[], toppingCosts: number[], target: number, output: number][] = [
    [[1,7], [3,4], 10, 10],
    [[2,3], [4,5,100], 18, 17],
    [[3,10], [2,5], 9, 8],
    [[10], [1], 1, 10]
  ]

  test.each(matrix)(
    'should work with baseCosts: %s, toppingCosts: %s, target: %s',
    (baseCosts, toppingCosts, target, expected): void => {
      expect(solution(baseCosts, toppingCosts, target)).toEqual(expected);
    }
  )
});
