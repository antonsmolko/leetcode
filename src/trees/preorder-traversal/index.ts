import { TreeNode } from '../utils'

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = (root: TreeNode | null): number[] => {
    const result: number[] = []

    const _preorderTraversal = (node: TreeNode | null) => {
        if (!node) return

        result.push(node.val)
        _preorderTraversal(node.left)
        _preorderTraversal(node.right)
    }

    _preorderTraversal(root)

    return result
}

export default preorderTraversal