import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('maxCompatibilitySum', () => {
  const matrix: [students: number[][], mentors: number[][], expected: number][] = [
    [[[1,1,0],[1,0,1],[0,0,1]], [[1,0,0],[0,0,1],[1,1,0]], 8],
    [[[0,0],[0,0],[0,0]], [[0,1],[1,1],[1,1]], 1],
    [[[0,1,0,1,1,1],[1,0,0,1,0,1],[1,0,1,1,0,0]], [[1,0,0,0,0,1],[0,1,0,0,1,1],[0,1,0,0,1,1]], 10]
  ]

  test.each(matrix)('should work', (students, mentors, expected): void => {
    expect(solution(students, mentors)).toEqual(expected);
  })
});
