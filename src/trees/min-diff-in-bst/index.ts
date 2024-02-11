import { TreeNode } from '../utils'
const minDiffInBST = (root: TreeNode | null): number => {
    let minDiff: number = Infinity
    let prevNode: TreeNode | null = null

    const setMinDiff = (node: TreeNode | null) => {
        if (!node) return

        setMinDiff(node.left)

        if (prevNode) {
            minDiff = Math.min(minDiff, node.val - prevNode.val)
        }

        prevNode = node

        setMinDiff(node.right)
    }

    setMinDiff(root)

    return minDiff
}

export default minDiffInBST