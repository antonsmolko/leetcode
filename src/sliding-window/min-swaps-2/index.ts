const minSwaps2 = (nums: number[]): number => {
    const windowSize = nums.reduce((acc, num) => acc + num, 0)

    let start = 1
    let end = windowSize
    let windowOnes = 0

    for (let i = 0; i < windowSize; i += 1) {
        windowOnes += nums[i]
    }

    let maxWindowOnes = windowOnes

    while (start < nums.length) {
        if (nums[start - 1] === 1) windowOnes -= 1
        if (nums[end % nums.length] === 1) windowOnes += 1

        maxWindowOnes = Math.max(maxWindowOnes, windowOnes)

        start += 1
        end += 1
    }

    return windowSize - maxWindowOnes
}

export default minSwaps2