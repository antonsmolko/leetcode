import { describe, expect, test } from '@jest/globals'
import solution from '.'
import { genTree, TreeNode } from '../utils'

describe('trees', () => {
    describe('findMode', () => {
        const matrix: [root: TreeNode | null, expected: number[]][] = [
            [genTree([1,null,2,2]), [2]],
            [genTree([0]), [0]]
        ]

        test.each(matrix)(
            'should work',
            (root, expected
            ): void => {
                solution(root)
                expect(solution(root)).toEqual(expected)
            })
    })
})