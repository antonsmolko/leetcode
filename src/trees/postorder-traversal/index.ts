import { TreeNode } from '../utils'

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = (root: TreeNode | null): number[] => {
    const result: number[] = []

    const _inorderTraversal = (node: TreeNode | null) => {
        if (!node) return

        _inorderTraversal(node.left)
        _inorderTraversal(node.right)
        result.push(node.val)
    }

    _inorderTraversal(root)

    return result
}

export default postorderTraversal