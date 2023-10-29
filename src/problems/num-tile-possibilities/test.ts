import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('numTilePossibilities', () => {
  const matrix: [tiles: string, expected: number][] = [
    ['AAB', 8],
    ['AAABBC', 188],
    ['V', 1]
  ]

  test.each(matrix)('should work with tiles: %s', (tiles, expected): void => {
    expect(solution(tiles)).toEqual(expected);
  })
});
