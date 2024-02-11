import { TreeNode } from '../utils'
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = (root: TreeNode | null): number[] => {
    const result: number[] = []

    const _inorderTraversal = (node: TreeNode | null) => {
        if (!node) return

        _inorderTraversal(node.left)
        result.push(node.val)
        _inorderTraversal(node.right)
    }

    _inorderTraversal(root)

    return result
}

export default inorderTraversal