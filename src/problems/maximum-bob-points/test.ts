import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('maximumBobPoints', () => {
  const matrix: [numArrows: number, aliceArrows: number[], expected: number[]][] = [
    [9, [1,1,0,1,0,0,2,1,0,1,2,0], [0,0,0,0,1,1,0,0,1,2,3,1]],
    [3, [0,0,1,0,0,0,0,0,0,0,0,2], [0,0,0,0,0,0,0,0,1,1,1,0]]
  ]

  test.each(matrix)('should work', (numArrows, aliceArrows, expected): void => {
    expect(solution(numArrows, aliceArrows)).toEqual(expected);
  })
});
