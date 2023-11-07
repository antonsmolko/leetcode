import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('isAdditiveNumber', () => {
  const matrix: [num: string, expected: boolean][] = [
    ['112358', true],
    ['199100199', true],
    ['221474836472147483649', true],
    ['0', false],
    ['111', false]
  ]

  test.each(matrix)('should work with num: %s', (num, expected): void => {
    expect(solution(num)).toEqual(expected);
  })
});
