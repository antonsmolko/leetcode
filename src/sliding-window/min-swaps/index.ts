const minSwaps = (nums: number[]): number => {
    let windowSize = 0

    for (let i = 0; i < nums.length; i += 1) {
        windowSize += nums[i]
    }

    let start = 1
    let end = windowSize

    let windowOnesCount = 0

    for (let i = 0; i < windowSize; i += 1) {
        windowOnesCount += nums[i]
    }

    let maxWindowCount = windowOnesCount

    while (start <= nums.length - windowSize) {
        if (nums[end] === 1) windowOnesCount += 1
        if (nums[start - 1] === 1) windowOnesCount -= 1

        maxWindowCount = Math.max(maxWindowCount, windowOnesCount)
        start += 1
        end +=1
    }

    return windowSize - maxWindowCount
}

export default minSwaps