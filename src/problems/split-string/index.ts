const splitString = (s: string): boolean => {
    const concatDigit = (num: number, digit: number): number => num * 10 + digit
    const INITIAL_PREV = -1
    const iter = (prev: number = INITIAL_PREV, sequenceLength: number = 0, startIndex: number = 0): boolean => {
        if (startIndex === s.length) {
            return sequenceLength > 1
        }

        let num = 0
        for (let i = startIndex; i < s.length; i += 1) {
            const digit = parseInt(s[i])
            num = concatDigit(num, digit)

            if (prev !== INITIAL_PREV) {
                if (prev - num !== 1) {
                    if (prev > num) continue
                    else return false
                }
            }

            if (iter(num, sequenceLength + 1, i + 1)) return true
        }

        return false
    }

    return iter()
}

export default splitString
