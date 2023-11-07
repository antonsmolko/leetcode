import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('splitIntoFibonacci', () => {
  const matrix: [num: string, expected: number[]][] = [
    ['1101111', [11,0,11,11]],
    ['112358130', []],
    ['0123', []],
    [
      '539834657215398346785398346991079669377161950407626991734534318677529701785098211336528511',
      []
    ]
  ]

  test.each(matrix)('should work with num: %s', (num, expected): void => {
    expect(solution(num)).toEqual(expected);
  })
});
