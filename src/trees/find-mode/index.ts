import { TreeNode } from '../utils'

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = (root: TreeNode | null): number[] => {
    let prevNode: TreeNode | null = null
    let currentDuplicates = 0
    let maxDuplicates = 0
    let modes: number[] = []

    const iter = (node: TreeNode | null) => {
        if (!node) return

        iter(node.left)

        currentDuplicates = prevNode && prevNode.val === node.val
            ? currentDuplicates + 1
            : 1

        if (currentDuplicates > maxDuplicates) {
            maxDuplicates = currentDuplicates
            modes = []
        }

        if (currentDuplicates === maxDuplicates) {
            modes.push(node.val)
        }

        prevNode = node

        iter(node.right)
    }

    iter(root)

    return modes
}

export default findMode