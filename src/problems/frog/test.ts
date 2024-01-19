import {describe, expect, test} from '@jest/globals';
import solution from './repetition'

describe('frog', () => {
  const matrix: [n: number, string[]][] = [
    [1, ['1']],
    [2, ['11', '2']],
    [3, ['111', '12', '21']],
    [4, ['1111', '112', '121', '211', '22']]
  ]

  test.each(matrix)('should work with %s', (n, expected): void => {
    expect(solution(n)).toEqual(expected);
  })
});
