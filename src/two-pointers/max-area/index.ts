const maxArea = (heights: number[]): number => {
    if (heights.length === 0) return 0

    let max = 0
    let i = 0
    let j = heights.length - 1

    while (i < j) {
        const candidate = Math.min(heights[i], heights[j]) * (j - i)
        max = Math.max(max, candidate)

        if (heights[i] <= heights[j]) i += 1
        else j -= 1
    }

    return max
}

export default maxArea