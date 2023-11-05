import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('partition', () => {
  const matrix: [s: string, expected: string[][]][] = [
    ['aab', [["a","a","b"],["aa","b"]]],
    ['a', [['a']]],
    ['efe', [["e","f","e"],["efe"]]]
  ]

  test.each(matrix)('should work with s: %s', (s, expected): void => {
    expect(solution(s)).toEqual(expected);
  })
});
