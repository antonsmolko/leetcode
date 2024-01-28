const totalSteps = (nums: number[]): number => {
    let maxStepsCount = 0
    const decStack: number[][] = []

    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i]
        let currentStepsCount = 1

        while (decStack.length > 0) {
            const [prevStepsCount, prevNum] = decStack[decStack.length - 1]
            if (num < prevNum) break
            currentStepsCount = Math.max(currentStepsCount, prevStepsCount + 1)
            decStack.pop()
        }

        if (decStack.length === 0) {
            decStack.push([0, num])
        } else {
            decStack.push([currentStepsCount, num])
            maxStepsCount = Math.max(maxStepsCount, currentStepsCount)
        }
    }

    return maxStepsCount
}

export default totalSteps