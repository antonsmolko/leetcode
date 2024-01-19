const arrangements = (letters: string, k: number): string[] => {
    const localLetters: string[] = []

    for (let i = 0; i < letters.length; i += 1) {
        localLetters.push(letters[i])
    }

    const swap = (arr: string[], index1: number, index2: number) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    }

    const stringify = (arr: string[]): string => {
        let str = ''

        for (let i = 0; i < arr.length; i += 1) {
           str += arr[i]
        }

        return str
    }

    const result: string[] = []

    const iter = (candidate: string[] = [], startIndex: number = 0) => {
        if (startIndex === k) {
            result.push(stringify(candidate))
            return
        }

        for (let i = startIndex; i < localLetters.length; i += 1) {
            swap(localLetters, startIndex, i)
            candidate.push(localLetters[startIndex])
            iter(candidate, startIndex + 1)
            candidate.pop()
            swap(localLetters, startIndex, i)
        }
    }

    iter()

    return result
}

export default arrangements