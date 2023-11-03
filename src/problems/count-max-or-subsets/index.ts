const countMaxOrSubsets = (nums: number[]): number => {
    let maxOrSum = 0
    let maxCount = 0

    const getOrSum = (arr: number[]): number => {
        let sum = 0
        for (let i = 0; i < arr.length; i += 1) sum |= arr[i]
        return sum
    }

    const setMaxOrSumState = (arr: number[]) => {
        const orSum = getOrSum(arr)
        if (orSum < maxOrSum) return

        if (orSum > maxOrSum) {
            maxOrSum = orSum
            maxCount = 1
            return
        }

        maxCount += 1
    }

    const iter = (candidate: number[] = [], startIndex: number = 0) => {
        setMaxOrSumState(candidate)

        for (let i = startIndex; i < nums.length; i += 1) {
            candidate.push(nums[i])
            iter(candidate, i + 1)
            candidate.pop()
        }
    }

    iter()

    return maxCount
}

export default countMaxOrSubsets
