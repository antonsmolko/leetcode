const minMoves2 = (nums: number[]): number => {
    const sorted = Object.assign([], nums).sort((a, b) => a - b)
    const median = sorted[~~(nums.length / 2)]

    return nums.reduce((acc, num) => acc + Math.abs(num - median), 0)
}

export default minMoves2