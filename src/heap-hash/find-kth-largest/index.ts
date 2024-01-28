const findKthLargest = (nums: number[], k: number): number => {
    let min = nums[0]
    let max = nums[0]

    for (let i = 0; i < nums.length; i += 1) {
        min = Math.min(min, nums[i])
        max = Math.max(max, nums[i])
    }

    const counts = Array(max - min + 1).fill(0)

    for (let i = 0; i < nums.length; i += 1) {
        counts[nums[i] - min] += 1
    }

    let i = counts.length

    while (k > 0) {
        i -= 1
        k -= counts[i]
    }

    return min + i
}

export default findKthLargest