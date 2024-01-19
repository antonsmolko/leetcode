import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('findSubstring1', () => {
  const matrix: [reference: string, candidate: string, expected: boolean][] = [
    ['крокодил', 'кроко', true],
    ['крокодил', 'кдил', true],
    ['крокодил', 'ид', false]
  ]

  test.each(matrix)(
      'should work with reference: %s, substring: %s',
      (reference, candidate, expected
  ): void => {
    expect(solution(reference, candidate)).toEqual(expected);
  })
});
