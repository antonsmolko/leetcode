import { describe, expect, test } from '@jest/globals';
import solution from '.'

describe('maxLength', () => {
  const matrix: [arr: string[], expected: number][] = [
    [["un","iq","ue"], 4],
    [["cha","r","act","ers"], 6],
    [["abcdefghijklmnopqrstuvwxyz"], 26],
    [["aa","bb"], 0],
    [["jnfbyktlrqumowxd","mvhgcpxnjzrdei"], 16]
  ]

  test.each(matrix)('should work with arr: %s', (arr, expected): void => {
    expect(solution(arr)).toEqual(expected);
  })
});
