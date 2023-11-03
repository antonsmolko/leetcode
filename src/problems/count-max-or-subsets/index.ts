const countMaxOrSubsets = (nums: number[]): number => {
    let maxOrSum = 0
    let maxCount = 0

    const setMaxOrSumState = (sum: number) => {
        if (sum < maxOrSum) return

        if (sum > maxOrSum) {
            maxOrSum = sum
            maxCount = 1
            return
        }

        maxCount += 1
    }

    const iter = (candidate: number = 0, startIndex: number = 0) => {
        setMaxOrSumState(candidate)

        for (let i = startIndex; i < nums.length; i += 1) {
            iter(candidate | nums[i], i + 1)
        }
    }

    iter()

    return maxCount
}

export default countMaxOrSubsets
