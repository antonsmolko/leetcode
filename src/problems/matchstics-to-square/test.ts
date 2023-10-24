import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('maxProduct', () => {
  const matrix: [matchsticks: number[], expected: boolean][] = [
    [[1,1,2,2,2], true],
    [[3,3,3,3,4], false]
  ]

  test.each(matrix)('should work with "%s"', (matchsticks, expected): void => {
    expect(solution(matchsticks)).toEqual(expected);
  })
});
