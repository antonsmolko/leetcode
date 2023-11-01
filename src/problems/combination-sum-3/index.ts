const combinationSum3 = (k: number, n: number): number[][] => {
    const combinations: number[][] = []

    const copy = (arr: number[]): number[] => {
        const newArr: number[] = []
        for (let i = 0; i < arr.length; i += 1) {
            newArr[i] = arr[i]
        }
        return newArr
    }

    const iter = (candidate: number[] = [], sub: number = n, startNum: number = 1) => {
        if (sub < 0) return
        if (candidate.length === k) {
            if (sub === 0) {
                combinations.push(copy(candidate))
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
