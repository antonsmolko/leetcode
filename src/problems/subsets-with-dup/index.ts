const subsetsWithDup = (nums: number[]): number[][] => {
    const sortedNums = nums.sort()
    const subsets: number[][] = []
    const iter = (subset: number[] = [], startIndex: number = 0) => {
        if (startIndex === 0) subsets.push([])
        else subsets.push([...subset])

        for (let i = startIndex; i < nums.length; i += 1) {
            if (i > startIndex && sortedNums[i] === sortedNums[i - 1]) continue

            subset.push(sortedNums[i])
            iter(subset, i + 1)
            subset.pop()
        }
    }

    iter()

    return subsets
}

export default subsetsWithDup
