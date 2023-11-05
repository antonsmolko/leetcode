import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('restoreIpAddresses', () => {
  const matrix: [s: string, expected: string[]][] = [
    ['25525511135', ["255.255.11.135","255.255.111.35"]],
    ['0000', ["0.0.0.0"]],
    ['101023', ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]]
  ]

  test.each(matrix)('should work with s: %s', (s, expected): void => {
    expect(solution(s)).toEqual(expected);
  })
});
