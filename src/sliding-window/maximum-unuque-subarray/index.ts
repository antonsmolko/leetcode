const maximumUniqueSubarray = (nums: number[]): number => {
    let maxSum = 0
    const numsSet = new Set<number>()

    let currentSum = 0
    let start = 0

    for (let i = 0; i < nums.length; i += 1) {
        const endNum = nums[i]

        if (numsSet.has(endNum)) {
            while (true) {
                const startNum = nums[start]
                start += 1

                if (startNum === endNum) break

                currentSum -= startNum
                numsSet.delete(startNum)
            }
        } else {
            numsSet.add(endNum)
            currentSum += endNum
            maxSum = Math.max(maxSum, currentSum)
        }
    }

    return maxSum
}

export default maximumUniqueSubarray