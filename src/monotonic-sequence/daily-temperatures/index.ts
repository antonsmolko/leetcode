const dailyTemperatures = (temperatures: number[]): number[] => {
    const days: number[] = Array(temperatures.length).fill(0)
    const decStack: number[][] = []

    for (let i = 0; i < temperatures.length; i += 1) {
        const value = temperatures[i]

        while (decStack.length > 0) {
            const [lastIndex, lastValue] = decStack[decStack.length - 1]

            if (value <= lastValue) break
            days[lastIndex] = i - lastIndex
            decStack.pop()
        }

        decStack.push([i, value])
    }

    return days
}

export default dailyTemperatures