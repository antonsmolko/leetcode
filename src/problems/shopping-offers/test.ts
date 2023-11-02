import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('shoppingOffers', () => {
  const matrix: [price: number[], special: number[][], needs: number[], expected: number][] = [
    [[2,5], [[3,0,5],[1,2,10]], [3,2], 14],
    [[2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1], 11]
  ]

  test.each(matrix)('should work', (price, special, needs, expected): void => {
    expect(solution(price, special, needs)).toEqual(expected);
  })
});
