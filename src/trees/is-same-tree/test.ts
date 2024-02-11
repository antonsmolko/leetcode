import { describe, expect, test } from '@jest/globals'
import solution from '.'

import { genTree, TreeNode } from '../utils'

describe('trees', () => {
    describe('isSameTree', () => {
        const matrix: [p: TreeNode | null, q: TreeNode | null, expected: boolean][] = [
            [genTree([1,2,3]), genTree([1,2,3]), true],
            [genTree([1,2]), genTree([1,null,2]), false],
            [genTree([1,2,1]), genTree([1,1,2]), false]
        ]

        test.each(matrix)(
            'should work',
            (p, q, expected
            ): void => {
                expect(solution(p, q)).toEqual(expected)
            })
    })
})