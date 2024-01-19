const frog = (n: number): string[] => {
    if (n === 1) return ['1']

    const result: string[] = []

    const stringify = (arr: number[]) => {
        let str = ''

        for (let i = 0; i < arr.length; i += 1) {
            str += arr[i]
        }

        return str
    }

    const iter = (candidate: number[] = [], steps: number = n) => {
        if (steps < 0) return result
        if (steps === 0) {
            result.push(stringify(candidate))
            return
        }

        candidate.push(1)
        iter(candidate, steps - 1)
        candidate.pop()

        candidate.push(2)
        iter(candidate, steps - 2)
        candidate.pop()
    }

    iter()

    return result
}

export default frog