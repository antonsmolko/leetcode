export type TreeNode = {
    val: number,
    left: TreeNode | null,
    right: TreeNode | null
}

const TreeNode = (val?: number | null): TreeNode | null => (val == null ? null : { val, left: null, right: null })

export const genTree = (arr: (number | null)[]): TreeNode | null => {
    const [rootVal] = arr

    if (rootVal === null) return null

    const root = TreeNode(rootVal)

    let startIndex = 1

    const _genTree = (node: TreeNode | null) => {
        if (startIndex >= arr.length || node === null) return null

        node.left = TreeNode(arr[startIndex++])
        node.right = TreeNode(arr[startIndex++])

        if (node.left) _genTree(node.left)
        if (node.right) _genTree(node.right)
    }

    _genTree(root)

    return root
}

