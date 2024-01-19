import {describe, expect, test} from '@jest/globals';
import solution from './repetition'

describe('generateParentheses', () => {
  const matrix: [n: number, string[]][] = [
    [1, ['()']],
    [2, ['(())', '()()']],
    [3, ['((()))', '(()())', '(())()', '()(())', '()()()']]
  ]

  test.each(matrix)('should work with %s', (n, expected): void => {
    expect(solution(n)).toEqual(expected);
  })
});
