const findUnsortedSubarray = (nums: number[]): number => {
    const sorted = [...nums].sort((a, b) => a - b)

    let startIndex = 0
    let endIndex = nums.length - 1

    while (startIndex < endIndex) {
        const startEqual = nums[startIndex] === sorted[startIndex]
        const endEqual = nums[endIndex] === sorted[endIndex]

        if (!startEqual && !endEqual) return endIndex - startIndex + 1

        if (startEqual) {
            startIndex += 1
        }

        if (endEqual) {
            endIndex -= 1
        }
    }

    return 0
}

export default findUnsortedSubarray