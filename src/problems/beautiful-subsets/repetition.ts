function beautifulSubsets(nums: number[], k: number): number {
    let result: number = 0

    const checkNum = (arr: number[], num: number) => {
        for (let i = 0; i < arr.length; i += 1) {
            if (Math.abs(num - arr[i]) === k) return false
        }
        return true
    }

    const iter = (candidate: number[] = [], startIndex: number = 0) => {
        for (let i = startIndex; i < nums.length; i += 1) {
            const current = nums[i]
            if (!checkNum(candidate, current)) continue

            candidate.push(current)

            result += 1
            iter(candidate, i + 1)
            candidate.pop()
        }
    }

    iter()

    return result
}

export default beautifulSubsets