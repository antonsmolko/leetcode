const getMinSwapsCount = (numbers: number[]): number => {
    let windowSize = 0

    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] === 1) {
            windowSize += 1
        }
    }

    let start = 1
    let end = windowSize

    let windowOnesCount = 0

    for (let i = 0; i < windowSize; i += 1) {
        if (numbers[i] === 1) {
            windowOnesCount += 1
        }
    }

    let maxWindowCount = windowOnesCount

    while (start <= numbers.length - windowSize) {
        if (numbers[end] === 1) windowOnesCount += 1
        if (numbers[start - 1] === 1) windowOnesCount -= 1

        maxWindowCount = Math.max(maxWindowCount, windowOnesCount)
        start += 1
        end +=1
    }

    return windowSize - maxWindowCount
}

export default getMinSwapsCount