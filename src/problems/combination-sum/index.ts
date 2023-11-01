const combinationSum = (candidates: number[], target: number): number[][] => {
    const combinations: number[][] = []
    const sortedCandidates = candidates.sort()

    const iter = (candidate: number[] = [], sub: number = target, startIndex: number = 0) => {
        if (sub < 0) return
        if (sub === 0) {
            combinations.push([...candidate])
            return
        }

        for (let i = startIndex; i < candidates.length; i += 1) {
            const item = sortedCandidates[i]
            candidate.push(item)
            iter(candidate, sub - item, i)
            candidate.pop()
        }
    }

    iter()

    return combinations
}

export default combinationSum
