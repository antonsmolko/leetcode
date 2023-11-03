const beautifulSubsets = (nums: number[], k: number): number => {
    let subsetsCount = 0

    const checkNum = (arr: number[], num: number) => {
        for (let i = 0; i < arr.length; i += 1) {
            if (Math.abs(arr[i] - num) === k) return false
        }

        return true
    }

    const iter = (candidate: number[] = [], startIndex: number = 0) => {
        for (let i = startIndex; i < nums.length; i += 1) {
            if (!checkNum(candidate, nums[i])) continue

            candidate.push(nums[i])

            subsetsCount += 1
            iter(candidate, i + 1)
            candidate.pop()
        }
    }

    iter()

    return subsetsCount

    /**
     * Вариант 2
     *
     * const iter = (forbiddenNums: number[] = [], startIndex: number = 0): number => {
     *     let count = 1
     *     for (let i = startIndex; i < nums.length; i += 1) {
     *         let forbidden = nums[i] - k
     *         if (forbidden >= 0 && forbiddenNums[forbidden] > 0) continue
     *
     *         forbidden = nums[i] + k
     *         if (forbidden < forbiddenNums.length && forbiddenNums[forbidden] > 0) continue
     *
     *         forbiddenNums[nums[i]] ??= 0
     *         forbiddenNums[nums[i]] += 1
     *         count += iter(forbiddenNums, i + 1)
     *         forbiddenNums[nums[i]] -= 1
     *     }
     *
     *     return count
     * }
     *
     * return iter() - 1
     */
}

export default beautifulSubsets
