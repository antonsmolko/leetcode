import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('splitString', () => {
  const matrix: [s: string, expected: boolean][] = [
    ['1234', false],
    ['050043', true],
    ['9080701', false],
    ['10009998', true]
  ]

  test.each(matrix)('should work with s: %s', (s, expected): void => {
    expect(solution(s)).toEqual(expected);
  })
});
