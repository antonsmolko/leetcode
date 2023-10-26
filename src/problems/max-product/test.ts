import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('maxProduct', () => {
  const matrix: [s: string, number][] = [
    ['leetcodecom', 9],
    ['bb', 1],
    ['accbcaxxcxx', 25]
  ]

  test.each(matrix)('should work with "%s"', (s, expected): void => {
    expect(solution(s)).toEqual(expected);
  })
});
