const combinationSum2 = (candidates: number[], target: number): number[][] => {
    const sortedCandidates = candidates.sort((a, b) => a - b)
    const combinations: number[][] = []

    const iter = (candidate: number[] = [], sum: number = target, startIndex: number = 0) => {
        if (sum === 0) {
            if (startIndex === 0) combinations.push([])
            else combinations.push([...candidate])
            return
        }

        for (let i = startIndex; i < candidates.length; i += 1) {
            if (sum < sortedCandidates[i]) return

            const num = sortedCandidates[i]
            if (i > startIndex && num === sortedCandidates[i - 1]) continue

            candidate.push(num)
            iter(candidate, sum - num, i + 1)
            candidate.pop()
        }

    }

    iter()

    return combinations
}

export default combinationSum2
