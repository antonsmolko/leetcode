const combinationSum3 = (k: number, n: number): number[][] => {
    const combinations: number[][] = []

    const iter = (candidate: number[] = [], sub: number = n, startNum: number = 1) => {
        if (sub < 0) return
        if (candidate.length === k) {
            if (sub === 0) {
                combinations.push([...candidate])
            }
            return
        }

        for (let num = startNum; num <= 9; num += 1) {
            candidate.push(num)
            iter(candidate, sub - num, num + 1)
            candidate.pop()
        }
    }

    iter()

    return combinations
}

export default combinationSum3
