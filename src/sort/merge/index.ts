const merge = (intervals: number[][]): number[][] => {
    const sortedIntervals = Object.assign([], intervals).sort((a, b) => a[0] - b[0])
    const merged: number[][] = []

    for (let i = 0; i < sortedIntervals.length; i += 1) {
        const current: number[] = sortedIntervals[i]

        if (i === 0) {
            merged.push(current)
            continue
        }

        const prev = merged[merged.length - 1]
        const prevLast = prev[prev.length - 1]

        if (prevLast >= current[0]) {
            merged.pop()
            merged.push([prev[0], Math.max(prevLast, current[current.length - 1])])
        } else {
            merged.push(current)
        }
    }

    return merged
}

export default merge