const subsets = (nums: number[]): number[][] => {
    const set: number[][] = []

    const iter = (candidate: number[] = [], startIndex: number = 0) => {
        set.push([...candidate])

        for (let i = startIndex; i < nums.length; i += 1) {
            candidate.push(nums[i])
            iter(candidate, i + 1)
            candidate.pop()
        }
    }

    iter()

    return set
}

export default subsets
