const isAdditiveNumber = (num: string): boolean => {
    const concatDigit = (num: number, digit: number) => num * 10 + digit
    const sequence: number[] = []

    const iter = (startIndex: number = 0) => {
        if (startIndex === num.length && sequence.length > 2) return true

        let currentNum = 0
        for (let i = startIndex; i < num.length; i += 1) {
            if (i > startIndex && num[startIndex] === '0') break

            const digit = parseInt(num[i])
            currentNum = concatDigit(currentNum, digit)

            if (sequence.length > 1) {
                const prevSum = sequence[sequence.length - 1] + sequence[sequence.length - 2]
                if (currentNum > prevSum) return false
                if (currentNum < prevSum) continue
            }

            sequence.push(currentNum)
            if (iter(i + 1)) return true
            sequence.pop()
        }

        return false
    }

    return iter()
}

export default isAdditiveNumber
