const maxLength = (arr: string[]): number => {
    const set: Set<string> = new Set()

    const addLetters = (set: Set<string>, str: string) => {
        for (let i = 0; i < str.length; i += 1) {
            const letter = str[i]
            if (set.has(letter)) {
                removeLetters(set, str, i - 1)
                return false
            }
            set.add(letter)
        }
        return true
    }

    const removeLetters = (set: Set<string>, str: string, lastIndex: number) => {
        for (let i = 0; i <= lastIndex; i += 1) {
            set.delete(str[i])
        }
    }

    const iter = (startIndex: number = 0) => {
        let max = set.size

        if (startIndex === arr.length) return max

        for (let i = startIndex; i < arr.length; i += 1) {
            const substr = arr[i]

            if (!addLetters(set, substr)) continue

            max = Math.max(max, iter(i + 1))

            removeLetters(set, substr, substr.length - 1)
        }

        return max
    }

    return iter()
}

export default maxLength
