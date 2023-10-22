import { describe, expect, test } from '@jest/globals';
import maxProduct from '.'

describe('maxProduct', () => {
  const matrix: [s: string, number][] = [
    ['leetcodecom', 9],
    ['bb', 1],
    ['accbcaxxcxx', 25]
  ]

  test.each(matrix)('should work with "%s"', (s, expected): void => {
    expect(maxProduct(s)).toEqual(expected);
  })
});
