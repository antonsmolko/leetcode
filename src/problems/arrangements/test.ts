import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('arrangements', () => {
  const matrix: [letters: string, k: number, expected: string[]][] = [
    ['abc', 2, ['ab', 'ac', 'ba', 'bc', 'cb', 'ca']],
    ['ab', 1, ['a', 'b']],
    ['abcd', 3, [
      'abc',
      'abd',
      'acb',
      'acd',
      'adc',
      'adb',
      'bac',
      'bad',
      'bca',
      'bcd',
      'bdc',
      'bda',
      'cba',
      'cbd',
      'cab',
      'cad',
      'cda',
      'cdb',
      'dbc',
      'dba',
      'dcb',
      'dca',
      'dac',
      'dab'
    ]]
  ]

  test.each(matrix)('should work with letters: %s, k: %s', (letters, k, expected): void => {
    expect(solution(letters, k)).toEqual(expected);
  })
});
