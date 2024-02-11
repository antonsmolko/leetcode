import { describe, expect, test } from '@jest/globals'
import solution from '.'
import { genTree, TreeNode } from '../utils'

describe('trees', () => {
    describe('preorderTraversal', () => {
        const matrix: [root: TreeNode | null, expected: number[]][] = [
            [genTree([1,null,2,3]), [1,2,3]],
            [genTree([]), []],
            [genTree([1]), [1]]
        ]

        test.each(matrix)(
            'should work',
            (root, expected
            ): void => {
                expect(solution(root)).toEqual(expected)
            })
    })
})