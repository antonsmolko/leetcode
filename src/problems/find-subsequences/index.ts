const findSubsequences = (nums: number[]): number[][] => {
    const subsequences: number[][] = []

    const hasDuplicates = (startIndex: number, endIndex: number) => {
        for (let i = startIndex; i < endIndex; i += 1) {
            if (nums[i] === nums[endIndex]) return true
        }
        return false
    }

    const iter = (candidate: number[] = [], startIndex: number = 0) => {
        if (candidate.length > 1) {
            subsequences.push([...candidate])
        }

        for (let i = startIndex; i < nums.length; i += 1) {
            if ((candidate.length > 0 && candidate[candidate.length - 1] > nums[i])
                || hasDuplicates(startIndex, i)) continue

            candidate.push(nums[i])
            iter(candidate, i + 1)
            candidate.pop()
        }
    }

    iter()

    return subsequences
}

export default findSubsequences
