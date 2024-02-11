import { describe, expect, test } from '@jest/globals'
import solution from '.'
import { genTree, TreeNode } from '../utils'

describe('trees', () => {
    describe('minDiffInBST', () => {
        const matrix: [root: TreeNode | null, expected: number][] = [
            [genTree([4,2,6,1,3]), 1],
            [genTree([1,0,48,null,null,12,49]), 1]
        ]

        test.each(matrix)(
            'should work',
            (root, expected
            ): void => {
                expect(solution(root)).toEqual(expected)
            })
    })
})